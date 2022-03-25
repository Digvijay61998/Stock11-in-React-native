import React, { useState ,useEffect} from "react";
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity ,AsyncStorage,Image} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from "../constants"
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { SafeAreaView } from "react-native-safe-area-context";
import routes from '../utils/routes';
import LinearGradient from 'react-native-linear-gradient'


const CELL_COUNT = 6;

function OtpVerification(prop) {
  console.log("prop",prop);
  const navigation = prop.navigation;
     const UserData = prop.route.params.Data;
     console.log("UserData",UserData);
    const [value, setValue] = useState('');
        console.log("value",value);
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const handleSubmit =() => {
        const data ={ 
          userId :  UserData.twoFAuthForm.userId,
          checkSum: UserData.twoFAuthForm.checkSum,
          invalidAttempts:UserData.twoFAuthForm.invalidAttempts,
          otp: value
        }
        console.log("Data",data);
        verifyUserOtp(data)
      // }
    }
 
    async function verifyUserOtp(data) {
      console.log("valdsf",data);
      try {
          const parsedResponse = await routes.STOCK_11.APIS.VERIFY_USER_OTP(data);
          console.log("parsedResponse=====",parsedResponse)
          console.log("token=====",parsedResponse.token)
          if(parsedResponse){
          await AsyncStorage.setItem('userToken', parsedResponse.token);
            navigation.navigate('CompleteProfile')
          }else{
            console.log("Otp not match");
          }
          } catch (error) {
          console.error(error);
      }
    }
//     const getuserID = async () => {
  
//       const checkSum = await AsyncStorage.getItem('checkSum');
//       const userToken = await AsyncStorage.getItem('userToken');
    
//     console.log("userToken",userToken);
//     console.log("checkSum",checkSum);
    
//     };
// useEffect (() => {
//   getuserID()
// })
return (
<LinearGradient 
    colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
      <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 194,
           height: 194,
          marginBottom:60
          
 }}
  />
    <View style={styles.loginBoxHeader}> 
  <Text style={[FONTS.textstyle,{color:"#05214C" ,fontSize:17}]}>ENTER OTP</Text>
  </View>
  <View style={styles.LoginBox}>
      <Text style={{color:"black",width:"80%"}}>Please enter a 6 digit verification Code sent to your registered mobile.</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={{justifyContent:"space-evenly",alignItems:"center",flexDirection:"row" ,marginTop:20}}>
      <TouchableOpacity
          style={{
            width:99,
            margin:15,
            borderRadius:50,
            height:37,
            backgroundColor:COLORS.ActiveButton,
            alignItems:"center",
            justifyContent:"center",
         }}
         onPress={() =>{
          //  console.log("value====================================",e.target.value);
          handleSubmit()
         }
        }
      >
      {/* <Button style={{ borderRadius:20}}
                    title="Submit"
                    color="#0BFEBC"
                    onPress={() =>
                        navigation.navigate('CompleteProfile')
                      }

/> */}
  <Text style={[FONTS.textstyle ,{color:"white"}]}>SUBMIT</Text>
</TouchableOpacity>
<TouchableOpacity
          style={{
            width:99,
            margin:15,
            borderRadius:50,
            height:37,
            backgroundColor:"#a5bcbb",
            alignItems:"center",
            justifyContent:"center",
         }}
         onPress={() =>{
          //  console.log("value====================================",e.target.value);
          handleSubmit()
         }
        }
      >
      {/* <Button style={{ borderRadius:20}}
                    title="Submit"
                    color="#0BFEBC"
                    onPress={() =>
                        navigation.navigate('CompleteProfile')
                      }

/> */}
  <Text style={[FONTS.textstyle ,{color:"white"}]}>39 sec</Text>
</TouchableOpacity>
</View>
</View>
    </LinearGradient>
        
        
    );
}

const styles = StyleSheet.create({
  container: {  flex:1,
      backgroundColor: "#1F1D2B",
      alignItems:"center",
      justifyContent:"center"},

      loginBoxHeader:{
        height:50,
        width:200,
        backgroundColor:"white",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        justifyContent:"center",
        alignItems:"center",
        elevation:10,
        },
      LoginBox:{
        height:300,
        width:291,
        backgroundColor:"white",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        elevation:10,
        border:'1px solid #E8E4E4',
        boxShadow:"0px 20px 10px #00000014"

          },

    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
      marginTop: 20,
      paddingHorizontal: 20,
      justifyContent: 'center'
    },
    cell: {
      marginHorizontal: 5,
      width: 35,
      height: 35,
      lineHeight: 30,
      fontSize: 20,
      borderWidth: 2,
      borderColor: '#ededed',
      textAlign: 'center',
      color:COLORS.lightBlack,
      backgroundColor: "#ededed",
      borderRadius:8
    },
    focusCell: {
      borderColor: COLORS.lightBlack,
    },
  });
export default OtpVerification;
