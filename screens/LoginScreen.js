import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import PhoneInput from "react-native-phone-number-input";

import { COLORS, FONTS, icons, SIZES } from "../constants"
import { number } from 'yup/lib/locale';
import routes from '../utils/routes';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';






function LoginScreen({navigation}) { 
  const [value, setValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  
  function loginWithMobile() {
    setIsVerified(!isVerified);

}

const onSubmit = async (values) => {
  console.log("va;l",values);
  try {
      const parsedResponse = await routes.STOCK_11.APIS.LOGIN(values);
      setUserDetail(parsedResponse);
      console.log("parsedResponse=====",parsedResponse)
      Notification("OTP sent successfully!!","success");
  } catch (error) {
      console.error(error);
  }
}
//  VALIDATION SCHEMA
const validationSchema = Yup.object({
   phoneNumber: Yup.number().required("This field is Required")

});

// const loginForm = useFormik({
//   initialValues: { phoneNumber: "" },
//   validationSchema: Yup.object({
//     // phoneNumber: Yup.string()
//     //     .required("This field is Required")
//     //     .matches(
//     //       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
//     //       "Phone number is not valid"
//     //     )
//     phoneNumber: Yup.number().required("This field is Required")
//   }),
// });

    
return (
  

  
        <View testID = 'TID8' style={styles.container}>
          <Formik
            initialValues ={{ phoneNumber: "" }}          
            
            validationSchema = {validationSchema}
            onSubmit={onSubmit}
          >
            {(values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit)=>{
              return(
                <View style={styles.LoginBox}>
                <Text style={[FONTS.textstyle,{color:COLORS.ActiveButton ,fontSize:20}]}>Login</Text>
                <Text style={[FONTS.textstyle,{fontSize:15, letterSpacing:2 ,color:COLORS.FaintWhite ,padding:10}]}> Enter Your Mobile Number</Text>
                <TextInput
                  style={[FONTS.textstyle,styles.input]}
                  id="phoneNumber"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleSubmit}
  
                  placeholder="Enter Number"
                  placeholderTextColor={COLORS.ActiveButton}
                  paddingLeft={110}
                  keyboardType="numeric"
                  autoComplete="cc-number"
                  maxLength={10}
                  margin={10}
                  />
                  <TouchableOpacity
                  style={{
                      width:300,
                      margin:15,
                      borderRadius:50,
                      height:50,
                      backgroundColor:COLORS.ActiveButton,
                   }}
                   title="Request OTP"
                   color="#f5871f00"
                   elevation="2"
                   onChangeText={(val)=>setNumber(val)}
  
                  //  onClick={loginWithMobile}
                  //  disabled={!(isValid && dirty)}
                   onPress={() =>{
                    navigation.navigate('OtpVerification');
                    onSubmit()
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
  
  /> */}<View style={{paddingLeft:100,paddingTop:13}}>
    <Text style={[FONTS.textstyle ,{color:"black"}]}>Request OTP</Text>
  </View>
  
  </TouchableOpacity>
  </View>
              )
            }}
           
</Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#1F1D2B",
        alignItems:"center",
        justifyContent:"center"
    },
    LoginBox:{
        height:250,
        width:360,
        backgroundColor:COLORS.HeaderBackground,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        elevation:10

          },
    input: {
        height: 50,
        width:330,
        borderRadius:50,
        color:COLORS.ActiveButton ,
        backgroundColor:COLORS.secondary,
        elevation:1
      },
    
})
export default LoginScreen;