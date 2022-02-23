import React, { useState ,useEffect} from "react";
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from "../constants"
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { SafeAreaView } from "react-native-safe-area-context";
import routes from '../utils/routes';


const CELL_COUNT = 6;

function OtpVerification(prop) {
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
      } catch (error) {
          console.error(error);
      }
    }


return (
<SafeAreaView style={styles.container}>
  <View style={styles.LoginBox}>
      <Text style={[FONTS.textstyle, {color:COLORS.ActiveButton ,fontSize:25}]}>OTP Verfication</Text>
      <Text style={[FONTS.textstyle,{color:COLORS.FaintWhite}]}>We have send a verification code to your mobile number +91 XXX XXX XXXX</Text>
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
      <Text style={{fontSize:SIZES.h3, color:"white",paddingTop:25}}>I didn't receive code.<Text style={{color:COLORS.ActiveButton}}>Resend Code</Text></Text>
      
      <TouchableOpacity
          style={{
            width:300,
            margin:15,
            borderRadius:50,
            height:50,
            backgroundColor:COLORS.ActiveButton,
         }}
         onPress={() =>{
          //  console.log("value====================================",e.target.value);
          // navigation.navigate('CompleteProfile'),
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

/> */}<View style={{paddingLeft:120,paddingTop:13}}>
  <Text style={[FONTS.textstyle ,{color:"black"}]}>Submit</Text>
</View>
</TouchableOpacity>
</View>
    </SafeAreaView>
        
        
    );
}

const styles = StyleSheet.create({
  container: {  flex:1,
      backgroundColor: "#1F1D2B",
      alignItems:"center",
      justifyContent:"center"},

      LoginBox:{
        height:290,
        width:360,
        backgroundColor:COLORS.HeaderBackground,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        elevation:10

          },

    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 55,
      height: 60,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
      color:COLORS.ActiveButton
    },
    focusCell: {
      borderColor: '#000',
    },
  });
export default OtpVerification;
