import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';

import { COLORS, FONTS, icons, SIZES } from "../constants"
import { number } from 'yup/lib/locale';






function LoginScreen({navigation}) { 
    
return (

  
        <View testID = 'TID8' style={styles.container}>
              <Text style={{fontSize:SIZES.h1, color:COLORS.ActiveButton}}>Login</Text>
              <Text style={{color:"white"}}> Enter Your Mobile Number</Text>
              <TextInput
                style={styles.input}
                value={number}
                placeholder="Enter Number"
                keyboardType="numeric"
                autoComplete="cc-number"
                maxLength={10}
                />
                <Button style={{ borderRadius:20}}
                    title="Request OTP"
                    color="#0BFEBC"
                    onChangeText={(val)=>setNumber(val)}
                    onPress={() =>
                        navigation.navigate('OtpVerification')
                      }

/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#1F1D2B",
    },
  
    textInputContainer:{
        position: "relative",
        width: 350,
        height: 140
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color:"black",
        backgroundColor:"white"
      },
      fixToText: {
          flex:1,
      
        backgroundColor: "red",
        width: '50%',
        borderRadius: 20
      },
})
export default LoginScreen;