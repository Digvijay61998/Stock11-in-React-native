import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList} from 'react-native'
// import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container} from "../../constants"
import React from 'react';
import {  FONTS, container } from '../../../constants';

const PromoCode = () => {
  return (
    <View style={[container,{justifyContent:"flex-start"}]}>
      <View style={{flexDirection: "row" ,justifyContent:"space-around" ,width:370 ,marginTop:30}}>
        <View style={{backgroundColor:COLORS.primary ,width:100,height:70 ,borderRadius:10 ,justifyContent:"center" ,alignItems: "center"}}>
          <Text style={[FONTS.textstyle,{marginBottom:5}]}>Exclusive</Text>
          <Text style={FONTS.textstyle}>10%</Text>
          </View>
        <View style={{backgroundColor:COLORS.primary ,width:250,height:70,borderRadius:10,justifyContent:"center" ,alignItems:"flex-start",paddingLeft:15}}>
        <Text style={[FONTS.textstyle,{marginBottom:5}]}>Get 10% I Mini 200Rs</Text>
          <Text style={[FONTS.textstyle,{fontSize:10}]}>Get 10% amount into you wallet by adding 200rs into your wallet</Text>
        </View>
      </View>
      <Text style={[FONTS.textstyle,{fontSize:10 ,color:COLORS.ActiveButton,top:5 ,left:20}]}>Code:WIN10</Text>
    </View>
  );
};

export default PromoCode;

const styles = StyleSheet.create({});
