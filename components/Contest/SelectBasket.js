import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {  COLORS, FONTS,  } from "../../constants";

const SelectBasket = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
         <View style={styles.WinningsContainer}>
             <View style={styles.WinningTitleList}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingBottom:25,paddingRight:200}]}>Basket 1</Text>
            </View>
            <View style={styles.WinningTitleList}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>LS</Text>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>FS</Text>
            </View>

            <View style={{ justifyContent: "space-around",
        flexDirection: "row",
        padding: 10,height:150}}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Cipla</Text>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Hero MotoCrop</Text>
            </View>
           </View>
           </View>
           
           <View style={{paddingTop:25}}>
         <View style={styles.WinningsContainer}>
             <View style={styles.WinningTitleList}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingBottom:25,paddingRight:200}]}>Basket 1</Text>
            </View>
            <View style={styles.WinningTitleList}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>LS</Text>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>FS</Text>
            </View>

            <View style={{ justifyContent: "space-around",
        flexDirection: "row",
        padding: 10,height:150}}>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Cipla</Text>
            <Text style={[FONTS.textstyle,{fontSize:16,paddingTop:10,paddingLeft:10}]}>Hero MotoCrop</Text>
            </View>
           </View>
           </View>

           <View style={{paddingTop:100,alignItems:'center'}}>
           <TouchableOpacity style={[FONTS.button , {width:200,marginTop:60 ,bottom:-15}]}
           onPress={() =>
            navigation.navigate('Home')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Join</Text>
       </TouchableOpacity>
       </View>
        </SafeAreaView>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F1D2B",
        paddingTop:25
    },
    WinningsContainer: {
        backgroundColor: COLORS.primary,
            borderRadius: 12,
            marginLeft: 15,
            marginRight: 15,
            width: 300,
            height:180,
            
      },
      WinningTitleList: {
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#575966",
      }

})

export default SelectBasket;