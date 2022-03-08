import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';
import { CardBox, COLORS, FONTS, images } from "../../../constants";

const PayUsing =({navigation})=>{
    var reactNativeCircleCheckbox = require("react-native-circle-checkbox")
    return(
        <SafeAreaView style={styles.container}>
           <View style={[CardBox, styles.payContainer]}>
               <View>
                   <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Wallets</Text>
               </View>
               <View style={{flexDirection:"row",marginTop:20,marginLeft:30}}>
               <View >
               <Image
                source={images.wallet}
                resizeMode="contain"
                style={{
                width: 30,
                height: 30,
                marginRight: 10
        }}
      />
               </View>
            <View style={{display:"flex",justifyContent:"flex-end"}}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingBottom:5,paddingLeft:10}]}>Pay by Deposit Wallet</Text>
           </View>
           </View>
           </View>

        
           <View style={[CardBox, styles.payContainer]}>
               <View>
                   <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Cards</Text>
               </View>
               <View style={{flexDirection:"row",marginTop:20,marginLeft:30}}>
               <View >
               <Image
                source={images.wallet}
                resizeMode="contain"
                style={{
                width: 30,
                height: 30,
                marginRight: 10
        }}
      />
               </View>
            <View style={{display:"flex",justifyContent:"flex-end"}}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingBottom:5,paddingLeft:10}]}>Add Credit Card & Debit Cards</Text>
           </View>
           </View>
           </View>

           <View style={[CardBox,styles.upiContainer]}>
               <View>
                   <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>UPI</Text>
               </View>
               <View style={{flexDirection:"row",marginTop:20,marginLeft:30}}>
               <View >
               <Image
                source={images.wallet}
                resizeMode="contain"
                style={{
                width: 30,
                height: 30,
                marginRight: 10
        }}
      />
               </View>
            <View style={{display:"flex",justifyContent:"flex-end"}}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingBottom:5,paddingLeft:10}]}>Google Pay</Text>
           </View>
           
           </View>
           <View style={{flexDirection:"row",marginTop:20,marginLeft:30}}>
               <View >
               <Image
                source={images.wallet}
                resizeMode="contain"
                style={{
                width: 30,
                height: 30,
                marginRight: 10
        }}
      />
               </View>
            <View style={{display:"flex",justifyContent:"flex-end"}}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingBottom:5,paddingLeft:10}]}>Pay Via UPI</Text>
            <Text style={[FONTS.textstyle,{fontSize:10,paddingBottom:5,paddingLeft:10}]}>You need to have a registered UPI</Text>

           </View>
           
           </View>
           </View>

           <View style={[CardBox, styles.payContainer]}>
               <View>
                   <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Net Banking</Text>
               </View>
               <View style={{flexDirection:"row",marginTop:20,marginLeft:30}}>
               <View >
               <Image
                source={images.wallet}
                resizeMode="contain"
                style={{
                width: 30,
                height: 30,
                marginRight: 10
        }}
      />
               </View>
            <View style={{display:"flex",justifyContent:"flex-end"}}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingBottom:5,paddingLeft:10}]}>Net Banking</Text>
           </View>
           </View>
           </View>
           

        <View style={{bottom:-30}}>
        <TouchableOpacity style={[FONTS.button , {width:200}]}
           onPress={() =>
            navigation.navigate('Home', {
                component: 'Pay Using',
              })
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
        paddingTop:50
    },
    payContainer:{
        backgroundColor:'#252837',
        height:110
    },
    upiContainer:{
        backgroundColor:'#252837',
        height:160 
    }
})

export default PayUsing;