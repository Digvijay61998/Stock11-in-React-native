import React ,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,ScrollView ,SafeAreaView ,TouchableOpacity,FlatList, Image} from "react-native";
import { COLORS, FONTS, icons ,Header ,CardBox ,dummyData } from '../../../constants';
// import {  COLORS, FONTS, icons ,Header ,CardBox ,dummyData } from "../../constants";

export const SelectBasket = ({navigation}) => {
const data = dummyData.basketDetails
    const [basketDetails, setBasketDetails] = useState("");
    console.log("basketDetails",basketDetails);

    useEffect(() => {
        if(data === undefined){
            setBasketDetails("")
        }else{
            setBasketDetails(data)
        }
      });
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView styles={styles.scroller}>
            <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
             <View style={[CardBox,styles.CardBoxStyle]}>
        <View style={styles.IdolContainer}>
            <View style={styles.headTitle}>
                <Text style={FONTS.textstyle}>Basket 1</Text>
                <Text style={FONTS.textstyle}>Icon</Text>
            </View>
            <View style={[styles.AlignText,{padding:10 ,borderBottomWidth :2,borderBottomColor: "#383945"}]}>
            
                <Text style={[FONTS.textstyle, {right:20}]}>{item.category1}</Text>
                <Text style={[FONTS.textstyle,{right:20}]}>{item.category2}</Text>
            </View>
            <View style={[styles.AlignText,{flex:1}]}>
               
                <Text style={FONTS.textstyle}>{item.company}</Text>
                <Text style={FONTS.textstyle}>{item.stockName}</Text>
            </View>
            
        </View>
    </View>
           )}
           keyExtractor={(item, index) => index}
         />
     </ScrollView>

           <View style={{paddingTop:70,alignItems:'center'}}>
           <TouchableOpacity style={[FONTS.button , {width:200,marginTop:50 ,bottom:30}]}
           onPress={() =>
            navigation.navigate('Home', {
                component: 'Select Basket',
              })          }
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
    Container: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLORS.secondary,

scroller: {
    flex: 1,
  overflow:"hidden",
},

TimeDate: {
    width: 350,
    height: 30,
    backgroundColor: "#252837",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
},
    CardBoxStyle:{ 
        backgroundColor:COLORS.primary,
         elevation: 5 ,
          borderRadius: 10,
           overflow: "hidden",
           width:"82%"
    },
    IdolContainer: {
        position: "relative",
        width: 350,
        height: 140,
    },
    headTitle:{
        justifyContent: "space-between", 
        flexDirection: "row",
         padding: 6,
         backgroundColor:COLORS.HeaderBackground , 
         right: 5 , bottom:5,
         width: 360,
         borderBottomWidth :2,
         borderBottomColor: "#383945",
       },
       AlignText:{
        justifyContent: "space-around", 
         alignItems: "center",
         flexDirection: "row"
    },


})

export default SelectBasket;