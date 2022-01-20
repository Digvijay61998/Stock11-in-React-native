import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from "../constants"
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { SafeAreaView } from "react-native-safe-area-context";

  const CELL_COUNT = 4;

    function OtpVerification({navigation}) {
        const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
return (

<SafeAreaView style={styles.root}>
      <Text style={{fontSize:SIZES.h1, color:COLORS.ActiveButton}}>OTP Verfication</Text>
      <Text style={{fontSize:SIZES.h3, color:"white"}}>We have send a verification code to your mobile number +91</Text>
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
      <Text style={{fontSize:SIZES.h3, color:"white"}}>I didn't receive code.<Text style={{color:COLORS.ActiveButton}}>Resend Code</Text></Text>
      <Button style={{ borderRadius:20}}
                    title="Submit"
                    color="#0BFEBC"
                    onPress={() =>
                        navigation.navigate('CompleteProfile')
                      }

/>
    </SafeAreaView>
        
        
    );
}

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20, backgroundColor:"#1F1D2B"},
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
