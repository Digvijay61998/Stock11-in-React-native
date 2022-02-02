import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardBox, COLORS, FONTS } from "../../constants";

const CurrentBalance =() =>{
return(
    <SafeAreaView style={styles.container}>
        <View style={styles.balanceContainer}>
       
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{color:'white',fontWeight:'bold',paddingLeft:25,paddingTop:10}}> CurrentBalance</Text>
        <Text style={{color:'white',fontWeight:'bold',paddingRight:50, paddingTop:10}}> Rs. 1</Text>
        </View>
        <View style={{paddingTop:20,flexDirection:'row',justifyContent:"space-between"}}>
        <Text style={{color:"white",paddingLeft:25}}> Entry</Text>
        <Text style={{color:"white",fontWeight:"bold", paddingRight:45}}> Rs. 1,000</Text> 
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
        <Text style={{color:"white",paddingLeft:25}}> Join this Contest by adding</Text>
        <Text style={{color:"white",fontWeight:"bold", paddingRight:45}}> Rs. 999</Text> 
        </View>
        </View>
        <View style={{alignItems:"center",paddingTop:25}}>
        <TouchableOpacity style={[FONTS.button, { width: 150,marginRight: 20 }]}
                    // onPress={() =>;
                    //     navigation.navigate('Current Balance')
                    // }
                >
                    <Text style={[FONTS.textstyle, { color:COLORS.primary  }]}>Rs.999</Text>
                </TouchableOpacity>
        </View>

        <View style={{width:300,elevation:6,borderRadius:40,height:50,backgroundColor:COLORS.primary,marginTop:100 ,justifyContent:"space-between",alignItems:"center",flexDirection:"row",}}>
            <View>
             <TextInput
                // style={styles.input}
                placeholder="Enter promocode"
                placeholderTextColor="white"
                paddingLeft={20}
                keyboardType="numeric"
                autoComplete="cc-number"
                maxLength={10}
                // margin={10}
                />
            </View>
            <View>
            <TouchableOpacity style={{
                width:100,
                // margin:15,
                borderRadius:50,
                height:50,
                backgroundColor:"#0BFEBC",
                // elevation:5
            }}>
            <View style={{alignItem:"center",paddingLeft:27,justifyContent:"center",paddingTop:12}}>
            <Text style={[FONTS.textstyle ,{color:"black"}]}>Apply</Text>
            </View>
            </TouchableOpacity>
            </View>
        </View>

    <View style={{paddingTop:180}}>
    <TouchableOpacity
                style={{
                    width:300,
                    margin:15,
                    borderRadius:50,
                    height:50,
                    backgroundColor:COLORS.ActiveButton,
                 }}
                //  onPress={() =>
                //      navigation.navigate('OtpVerification')
                //    }
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
  <Text style={[FONTS.textstyle ,{color:"black"}]}>Add Balance</Text>
</View>

</TouchableOpacity>
    </View>

    </SafeAreaView>
)
}

export default CurrentBalance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F1D2B",
        paddingTop:25,
        alignItems:"center"
    },
    balanceContainer: {
        height: 120,
        width: 360,
        backgroundColor: "#252837",
        margin: 4,
        borderRadius: 10,
        padding: 5,
        elevation:3,
            
      },
      input: {
        height: 50,
        width:330,
        borderRadius:50,
        color:COLORS.ActiveButton ,
        backgroundColor:"#252837",
        elevation:6
      },
      

})