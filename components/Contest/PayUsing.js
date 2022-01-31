import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { CardBox, COLORS, FONTS } from "../../constants";
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

const PayUsing =({navigation})=>{
    var reactNativeCircleCheckbox = require("react-native-circle-checkbox")
    return(
        <SafeAreaView style={styles.container}>
           <View style={[CardBox, styles.payContainer]}>
            <View style={{display:"flex",justifyContent:"flex-end"}}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Pay by Deposit Wallet</Text>
            <Text style={{color:'#0BFEBC', paddingLeft:12, paddingTop:5}}>0.0 INR</Text>
           {/* <View style={{paddingLeft:300,paddingTop:5,position:"relative"}}>
            <CircleCheckBox
    outerSize="25"
    onToggle={(checked) => console.log('My state is: ', checked)}
/></View> */}
           </View>
           </View>

           <View style={[CardBox, styles.payContainer]}>
        <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Pay by Deposit Wallet</Text>
            <Text style={{color:'#0BFEBC', paddingLeft:12, paddingTop:5}}>0.0 INR</Text>


           </View>

           <View style={[CardBox, styles.payContainer]}>
        <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Pay by Deposit Wallet</Text>
            <Text style={{color:'#0BFEBC', paddingLeft:12, paddingTop:5}}>0.0 INR</Text>


           </View>
        <View style={{paddingTop:250}}>
           <TouchableOpacity style={[FONTS.button , {width:300 ,marginTop:60 ,bottom:-15}]}
           onPress={() =>
            navigation.navigate('Select Basket')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Pay</Text>
       </TouchableOpacity>
       </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F1D2B",
        alignItems: "center",
        paddingTop:25
    },
    payContainer:{
        backgroundColor:'#252837',
        height:75
    }
})

export default PayUsing