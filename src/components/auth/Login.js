import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity ,AsyncStorage ,ImageBackground,Image} from 'react-native';
import { COLORS, FONTS, icons, SIZES,container } from "../../constants"
import { number } from 'yup/lib/locale';
import routes from '../../../utils/routes';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient'

const Login = ({navigation}) => {

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
    const data ={ 
      mobile : val.mobile,
      password : val.password

    }
    // GetUserProfile(data)
  }
//   async function GetUserProfile(data) {
//     try {
//         const parsedResponse = await routes.STOCK_11.APIS.CREATE_USER_LOGIN(data);
//         console.log("parsedResponse=====",parsedResponse)
//         setUserData(parsedResponse)
//         await AsyncStorage.setItem('checkSum', parsedResponse.twoFAuthForm.checkSum);
//         if(parsedResponse){
//           console.log("userData",parsedResponse);
//           navigation.navigate('Tabs',{Data:parsedResponse});
//         }
//     } catch (error) {
//         console.error(error);
//     }
//   }
  
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
    <Text style={[FONTS.textstyle,{color:"#05214C" ,fontSize:15}]}>LOGIN</Text>
    </View>
            <Formik
              initialValues ={{ mobile: ""}}          
              
              validationSchema = {validationSchema}
              onSubmit={handleSubmit}
            >
              {({values, handleChange, onKeyPress,errors, setFieldTouched, touched, isValid, handleSubmit})=>{
                return(
                  <View style={styles.LoginBox}>
                  <Text style={[FONTS.textstyle,{fontSize:15, letterSpacing:1 ,color:COLORS.black ,top:-10}]}>WELCOME</Text>
                 <View 
                    style={styles.input}center
                 >
                  <TextInput
                    style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center",fontSize:18}]}
                    name="mobile"
                    keyboardType='numeric'
                    value={values.mobile}
                    onChangeText={handleChange('mobile')}
                    placeholder="MOBILE NO OR EMAIL"
                    placeholderTextColor="#4771a5"
                    // paddingLeft={10}
                    autoComplete="cc-number"
                    maxLength={10}
                    // margin={10}
                    />
                    </View>
                    <View 
                    style={styles.input}center
                 >
                  <TextInput
                    style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center",fontSize:18}]}
                    name="password"
                    keyboardType='numeric'
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                    placeholder="*****"
                    placeholderTextColor="#4771a5"
                    // paddingLeft={10}
                    autoComplete="cc-number"
                    maxLength={10}
                    // margin={10}
                    />
                    </View>
                    <View style={{alignItems:"center",justifyContent:"space-between",flexDirection:"row",width:"100%"}}>
                      <TouchableOpacity
                      onPress={()=>{
                           navigation.navigate('Register',"forgotPassword")
                    }}
                      > 
                          <Text style={{fontSize:12,left:5,top:5}}>Forgot Password?</Text>
                      </TouchableOpacity> 
                      <TouchableOpacity
                          onPress={()=>{
                            navigation.navigate('OtpVerification',"LoginWithOTP")
                     }}
                      > 
                          <Text style={{color:"red",top:5,right:5}}>Login With OTP</Text>
                      </TouchableOpacity> 
                        </View>
                    <TouchableOpacity
                    style={{
                        width:SIZES.width-200,
                        top:25,
                        borderRadius:50,
                        height:37,
                        alignItems:"center",
                        opacity: 1,
                        backgroundColor:COLORS.ActiveButton,
                     }}
                     title="Request OTP"
                     color="#f5871f00"
                     elevation="2"
                     onChangeText={(val)=>setNumber(val)}
    
                    //  onClick={loginWithMobile}
                    //  disabled={!(isValid && dirty)}
                     onPress={() =>{
                      handleSubmit(),
                       navigation.navigate('Tabs');

                     }
                         
                       }
                    >
                    {/* <Button 
                        title="Request OTP"
                        color="#f5871f00"
                        elevation="2"
                        onChangeText={(val)=>setNumber(val)}
                        onPress={() =>
                            navigation.navigate('OtpVerification')
                          }
    
    /> */}<View style={{paddingTop:5}}>
      <Text style={[FONTS.textstyle ,{color:"white"}]}>LOGIN</Text>
    </View>
    
    </TouchableOpacity>
    </View>
                )
              }}
             
  </Formik>
  </LinearGradient >
  )
}

export default Login

const styles = StyleSheet.create({
    loginBoxHeader:{
        height:50,
        width:SIZES.width-180,
        backgroundColor:"white",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        justifyContent:"center",
        alignItems:"center",
        elevation:10,
        backgroundColor:COLORS.lightPink,
        marginTop:100
        },
        LoginBox:{
            height:SIZES.height-450,
            width:SIZES.width-100,
            backgroundColor:"white",
            borderRadius:20,
            padding:20,
            alignItems:"center",
            justifyContent:"center",
            elevation:10,
            borderWidth:0.1,
            borderColor:COLORS.lightBlack,
              },
        input: {
            height: 40,
            width:"100%",
            borderRadius:50,
            marginTop:25,
            color:COLORS.ActiveButton ,
            backgroundColor:"#bfdedc",
            elevation:1,
          alignItems:'center',
          justifyContent:"center",
          },
})