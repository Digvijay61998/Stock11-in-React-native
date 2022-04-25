import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS, icons, SIZES } from '../../constants';


const BankTransfer = () => {

    return (
        <LinearGradient 
        colors={['#93d5ce', '#11a99d','#5700AD','#7e72c5' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
        >
 <Image 
     source={icons.Stock11Logo}
     resizeMode="contain"
     style={{
         width: 70,
         height:70,
         top:SIZES.width-500
        
}}/>

<Text style={{fontWeight:"bold",color:"white",marginBottom:30}}>BANK TRANSFER</Text>

        <View style={styles.addBalanceBox}>
        <View style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <View style={{paddingBottom:20}}>
            <TextInput
                style={[FONTS.textinput,{elevation:15,height:50,width:280,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
                name="Number"
                keyboardType="number-pad"
                placeholder="ENTER AMOUNT"
                placeholderTextColor="#474047" 
                 backgroundColor="white"
                autoComplete="cc-number"
                paddingLeft={20}
                />
            </View>
        
        <View  style={{paddingBottom:20}}>
        <TextInput
                style={[FONTS.textinput,{elevation:15,height:50,width:280,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
                name="ACC Number"
                keyboardType="number-pad"
                placeholder="ACC NO"
                placeholderTextColor="#474047" 
                 backgroundColor="white"
                autoComplete="cc-number"
                paddingLeft={20}
                />

        </View>
        <View  style={{paddingBottom:20}}>
        <TextInput
                style={[FONTS.textinput,{elevation:15,height:50,width:280,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
                name="Code"
                keyboardType="number-pad"
                placeholder="IFSC CODE"
                placeholderTextColor="#474047" 
                 backgroundColor="white"
                autoComplete="cc-number"
                paddingLeft={20}
                />        
        </View>
               
        </View>


        </View>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addBalanceBox: {
        elevation:10 ,
        width:SIZES.width-50,
        height:400,
        backgroundColor: "#fcf7fc",
        alignItems: "center",
        padding:25,
        borderRadius:20
      }
});

export default BankTransfer;