import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity  ,Image} from 'react-native';
// import { COLORS, FONTS, icons, SIZES,container } from "../constants"
import LinearGradient from 'react-native-linear-gradient'
import { icons,COLORS, FONTS,  SIZES,container } from '../../constants';

const Login = ({navigation}) => {


  
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
    <Text style={[FONTS.textstyle,{color:"#05214C" ,fontSize:15}]}>CHANGE PASSWORD</Text>
    </View>
          
                  <View style={styles.LoginBox}>
                 <View 
                    style={styles.input}
                 >
                  <TextInput
                    style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center",fontSize:13}]}
                    name="mobile"
                    keyboardType='numeric'
                    placeholder="ENTER YOUR MOBILE NO OR EMAIL"
                    placeholderTextColor="#4771a5"
                    // paddingLeft={10}
                    autoComplete="cc-number"
                    maxLength={10}
                    // margin={10}
                    />
                    </View>

                   <View style={{bottom:-100}}>
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
                  
    
    <View style={{paddingTop:7}}>
      <Text style={[FONTS.textstyle ,{color:"white"}]}>REQUEST OTP</Text>
    </View>
    
    </TouchableOpacity>
                   </View>
                  
    </View>
             
  </LinearGradient >
  )
}

export default Login

const styles = StyleSheet.create({
    loginBoxHeader:{
        height:50,
        width:SIZES.width-180,
        backgroundColor:"#f4f0f7",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        justifyContent:"center",
        alignItems:"center",
        elevation:10,
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
            border:'1px solid #E8E4E4',
            boxShadow:"0px 20px 10px #00000014"
              },
        input: {
            height: 40,
            width:"100%",
            borderRadius:15,
            marginTop:-100,
            color:COLORS.ActiveButton ,
            backgroundColor:"#bfdedc",
            elevation:1,
          alignItems:'center',
          justifyContent:"center",
          },
})