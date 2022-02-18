import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import PhoneInput from "react-native-phone-number-input";

import { COLORS, FONTS, icons, SIZES } from "../constants"
import { number } from 'yup/lib/locale';






function LoginScreen({navigation}) { 
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef();
  console.log("phoneInput",phoneInput);
  // const phoneInput = useRef<PhoneInput>(null);

    
return (

  
        <View testID = 'TID8' style={styles.container}>
            <View style={styles.LoginBox}>
              <Text style={[FONTS.textstyle,{color:COLORS.ActiveButton ,fontSize:20}]}>Login</Text>
              <Text style={[FONTS.textstyle,{fontSize:15, letterSpacing:2 ,color:COLORS.FaintWhite ,padding:10}]}> Enter Your Mobile Number</Text>
              {/* <TextInput
                style={[FONTS.textstyle,styles.input]}
                value={number}
                placeholder="Enter Number"
                placeholderTextColor={COLORS.ActiveButton}
                paddingLeft={110}
                keyboardType="numeric"
                autoComplete="cc-number"
                maxLength={10}
                margin={10}
                /> */}
              <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}             
                        defaultCode="IN"
                        layout="first"
                        containerStyle={[FONTS.textstyle,styles.input]}
                        onChangeText={(text) => {
                          setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                          setFormattedValue(text);
                        }}
                        // countryPickerProps={{ withAlphaFilter: true }}
                        withShadow
                        autoFocus
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
                 onPress={() =>
                     navigation.navigate('OtpVerification')
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