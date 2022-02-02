import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { COLORS, FONTS, icons, SIZES } from "../constants"

function CompleteProfile({navigation}) {
return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ProfileBox}>
         <TextInput
       style={styles.input}
       value={Text}
       placeholder="Full Name"
       keyboardType="default"
       placeholderTextColor={COLORS.FaintWhite}
      />    
      <TextInput
       style={styles.input}
       value={Text}
       placeholder="Email"
       keyboardType="email-address"
       placeholderTextColor={COLORS.FaintWhite}
      /> 

       <TextInput
       style={styles.input}
       value={Text}
       placeholder="+91 xxx xxx xxx"
       keyboardType="numeric"
       placeholderTextColor={COLORS.FaintWhite}
      />    
<TouchableOpacity
                style={{
                    width:300,
                    margin:25,
                    top:25,
                    borderRadius:50,
                    height:50,
                    backgroundColor:COLORS.ActiveButton,
                 }}
                 onPress={() =>
                    navigation.navigate('Home')
                  } 
                 >
{/* <Button style={{ borderRadius:20}}
                    title="Save"
                    color="#0BFEBC"
                    onPress={() =>
                        navigation.navigate('Home')
                      }/> */}
        <View style={{paddingLeft:130,paddingTop:13}}>
  <Text style={[FONTS.textstyle ,{color:"black"}]}>Save</Text>
</View>
        </TouchableOpacity>
             </View>
        
        </SafeAreaView>
  
       
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#1F1D2B",
        alignItems:"center",
        justifyContent:"center"
    },
    ProfileBox:{
        height:400,
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
        elevation:1,
        margin:10,
        paddingLeft:20,
        bottom:20,
      },
      
})
export default CompleteProfile;