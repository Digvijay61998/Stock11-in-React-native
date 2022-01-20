import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import { COLORS, FONTS, icons, SIZES } from "../constants"
import { SafeAreaView } from "react-native-safe-area-context";






function CompleteProfile({navigation}) {

   
return (
        <SafeAreaView style={styles.container}>
            <View>
         <TextInput
       style={styles.input}
       value={Text}
       placeholder="Full Name"
       keyboardType="default"
      />    
      <TextInput
       style={styles.input}
       value={Text}
       placeholder="Email"
       keyboardType="email-address"
      /> 

       <TextInput
       style={styles.input}
       value={Text}
       placeholder="+91 xxx xxx xxx"
       keyboardType="numeric"
      />    

<Button style={{ borderRadius:20}}
                    title="Save"
                    color="#0BFEBC"
                    onPress={() =>
                        navigation.navigate('Home')
                      }/>
        
        </View>
        
        </SafeAreaView>
  
       
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#1F1D2B",
    },
  
   
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color:"black",
        backgroundColor:"white"
      },
      
})
export default CompleteProfile;