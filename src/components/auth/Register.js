import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity ,AsyncStorage ,ImageBackground,Image} from 'react-native';
import { COLORS, FONTS, icons, SIZES ,container} from "../../constants"
import { number } from 'yup/lib/locale';
import routes from '../../../utils/routes';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient'

function Register(props) { 
  const navigation = props.navigation
  const [value, setValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [userData , setUserData] = useState();


  // const Getdata ={
//   userId : userData.twoFAuthForm.userId,
//   userKey: userData.userDTO.userKey,
//   checkSum: userData.twoFAuthForm.checkSum,
//   invalidAttempts: userData.twoFAuthForm.invalidAttempts,
//   mobile: userData.userDTO.mobile,
//   status: userData.userDTO.status,
// }
  
  function loginWithMobile() {
    setIsVerified(!isVerified);
}

const handleSubmit = async (val) => {
  const input = val.mobile
  console.log(input);
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regNumber = /^[0]?[789]\d{9}$/;
  if (input.match(regexEmail)) {
    console.log("true~~~~~~~~>");
    const data ={ 
      email : input
       }
    createUserProfile(data)
    return true; 
  } else if(input.match(regNumber) ) {
    console.log("false~~~~~~~~>");
    const data ={ 
    mobile : val.mobile
     }
    createUserProfile(data)
    return true;
  }
  else{
    console.log("input value is not correct")
  }

}
async function createUserProfile(data) {
  console.log(data);
  try {
      const parsedResponse = await routes.STOCK_11.APIS.CREATE_USER_LOGIN(data);
      console.log("parsedResponse=====",parsedResponse)
      setUserData(parsedResponse)
      if(parsedResponse){
        await AsyncStorage.setItem('userId' ,parsedResponse.twoFAuthForm.userId);
       let userKey = String(parsedResponse.userDTO.userKey)
       console.log("userKey~~~~~~~>",userKey);
        await AsyncStorage.setItem('userKey' ,userKey);
        navigation.navigate('OtpVerification',{Data:parsedResponse ,ForgotPassword:props.route.params});
      }
  } catch (error) {
      console.error(error);
  }
}

//  VALIDATION SCHEMA
const validationSchema = Yup.object({
   mobile: Yup.number().required("This field is Required")

});

// const loginForm = useFormik({
//   initialValues: { mobile: "" },
//   validationSchema: Yup.object({
//     // mobile: Yup.string()
//     //     .required("This field is Required")
//     //     .matches(
//     //       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
//     //       "Phone number is not valid"
//     //     )
//     mobile: Yup.number().required("This field is Required")
//   }),
// });

    
return (
  <LinearGradient
  colors={['#93d5ce', '#11a99d','#5700AD','#7e72c5' ]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={container}
>
  <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 150,
           height: 150,
           marginTop:SIZES.width-500
          
 }}
  />
  <View style={styles.loginBoxHeader}> 
  {props.route.params === "forgotPassword" ? <Text style={[FONTS.textstyle,{color:"#05214C" ,fontSize:15}]}>FORGOT PASSWORD</Text>:<Text style={[FONTS.textstyle,{color:"#05214C" ,fontSize:15}]}>REGISTER</Text>}
  </View>
          <Formik
            initialValues ={{ mobile: ""}}          
            
            // validationSchema = {validationSchema}
            onSubmit={handleSubmit}
          >
            {({values, handleChange, onKeyPress,errors, setFieldTouched, touched, isValid, handleSubmit})=>{
              return(
                <View style={styles.LoginBox}>
                {props.route.params === "forgotPassword" ? <></>:<Text style={[FONTS.textstyle,{fontSize:15, letterSpacing:2 ,color:COLORS.black ,padding:10,}]}>CREATE ACCOUNT</Text>}
               <View 
                  style={styles.input}center
               >
                <TextInput
                  style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center",}]}
                  name="mobile"
                  keyboardType='email-address'
                  value={values.mobile}
                  onChangeText={handleChange('mobile')}
                  placeholder="Enter Mobile Number OR Email"
                  placeholderTextColor="#7e9291"
                  // paddingLeft={10}
                  autoComplete='email'
                  // maxLength={10}
                  // margin={10}
                  />
                  </View>
                  <TouchableOpacity
                  style={{
                      width:SIZES.width-200,
                      margin:15,
                      borderRadius:50,
                      height:37,
                      justifyContent:"center",
                      alignItems:"center",
                      backgroundColor:COLORS.ActiveButton,
                   }}
                   title="Request OTP"
                   color="#f5871f00"
                   elevation="2"
                   onChangeText={(val)=>setNumber(val)}
  
                  //  onClick={loginWithMobile}
                  //  disabled={!(isValid && dirty)}
                   onPress={() =>{
                    handleSubmit()
                   }}
                  >
    <Text style={[FONTS.textstyle ,{color:"white",fontSize:14}]}>REQUEST OTP</Text>
  </TouchableOpacity>
  </View>
              )
            }}
           
</Formik>
</LinearGradient >
    );
}

const styles = StyleSheet.create({
 
    loginBoxHeader:{
    height:50,
    width:200,
    backgroundColor:COLORS.lightPink,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    justifyContent:"center",
    alignItems:"center",
    elevation:10,
    marginTop:100
    },
    LoginBox:{
        height:300,
        width:291,
        backgroundColor:"white",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        elevation:10,
        borderWidth:0.1,
        borderColor:COLORS.lightBlack,
        boxShadow:"0px 20px 10px #00000014"
          },
    input: {
        height: 50,
        width:250,
        borderRadius:50,
        marginTop:25,
        color:COLORS.ActiveButton ,
        backgroundColor:"#bfdedc",
        elevation:1,
      alignItems:'center',
      justifyContent:"center",
      },
    
})
export default Register;