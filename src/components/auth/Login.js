import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity,ImageBackground,Image, ActivityIndicator} from 'react-native';
import { COLORS, FONTS, icons, SIZES,container } from "../../constants"
import {
  loginAccount,
} from "../../redux/Login/Actions";
import { useDispatch, useSelector } from "react-redux";
import routes from '../../../utils/routes';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient'
import {Loader} from "../../Common"
import { select } from 'redux-saga/effects';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const { loginData, isFetching, error } = useSelector((state) => state.auth);
  console.log("loginData=========>",error);
    const [userData , setUserData] = useState();

  const handleSubmit = async (val) => {
    console.log("val",val);
    const input = val.mobile
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regNumber = /^[0]?[789]\d{9}$/;
    if (input.match(regexEmail)) {
      console.log("true~~~~~~~~>");
          dispatch(
            loginAccount({
              data: {
                email : input,
                password : val.password
              },
            })
          );
          if(await loginData.userDTO.status){
            console.log("loginData.userDTO.status======>",loginData.userDTO.status);
             await navigation.navigate('Tabs');
          }
      return true; 
    } else if(input.match(regNumber) ) {
      console.log("false~~~~~~~~>");
      dispatch(
        loginAccount({
          data: {
            mobile : val.mobile,
            password : val.password
          },
        })
      );
      if(await loginData.userDTO.status){
        console.log("loginData.userDTO.status======>",loginData.userDTO.status);
          navigation.navigate('Tabs');
      }
      return true;
    }
    else{
      console.log("input value is not correct")
    }
  
  }
  
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
              
              // validationSchema = {validationSchema}
              onSubmit={handleSubmit}
            >
              {({values, handleChange, onKeyPress,errors, setFieldTouched, touched, isValid, handleSubmit})=>{
                return(
                  <View style={styles.LoginBox}>
                      <Loader loading={isFetching} />
                    <Text style={{bottom:30,color:"red"}}>{userData}</Text>
                  <Text style={[FONTS.textstyle,{fontSize:15, letterSpacing:1 ,color:COLORS.black ,top:-10}]}>WELCOME</Text>
                 <View 
                    style={styles.input}center
                 >
                  <TextInput
                    style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center",fontSize:18}]}
                    name="mobile"
                    keyboardType='email-address'
                    value={values.mobile}
                    onChangeText={handleChange('mobile')}
                    placeholder="Enter Mobile Number OR Email"
                    placeholderTextColor="#4771a5"
                    // paddingLeft={10}
                    autoComplete="cc-number"
                    // maxLength={10}
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
                    autoComplete="cc-number"
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
                            navigation.navigate('Register',"LoginWithOTP")
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
                    //  onClick={loginWithMobile}
                    //  disabled={!(isValid && dirty)}
                     onPress={handleSubmit}
                    ><View style={{paddingTop:5}}>
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