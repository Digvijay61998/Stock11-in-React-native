import { StyleSheet, Text, View ,ScrollView, TouchableOpacity ,FlatList ,ImageBackground} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox,dummyData} from "../../../constants"
import {IdolContest}from "../../../Common/index"

import React,{useState,useEffect} from 'react';

const UpcomingEvents = ({navigation}) => {

let url = [icons.card, icons.card1, icons.card3];


  const [UpcomingEvents,setUpcomingEvents]=useState()
  const UpcomingPriceEvents = dummyData.UpcomingPricePool
  useEffect(() => {
    if(UpcomingPriceEvents === undefined){
      setUpcomingEvents("")
    }else{
      setUpcomingEvents(UpcomingPriceEvents)
    }
  });

  return (
    <View  style={Header}>
    <ScrollView style={styles.scroller}>
    <FlatList 
                data = {UpcomingEvents}
                keyExtractor={(item) => item.id}
                
                renderItem={({ item ,index})=>(

                  <TouchableOpacity
                  onPress={() => navigation.navigate("UpcomingContestDetails")}
               >
                  {/* <View style={[styles.contestContainer,{ backgroundColor: colors[index % colors.length] }]}> */}
                  <ImageBackground
                  resizeMode="cover"
                 source={url[index % url.length]}
                 style={styles.contestContainer}
                  >
                   <IdolContest data={item} />
                   {/* </View> */}
                   </ImageBackground>
                   </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index}
               />
               </ScrollView>  
 </View>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  overflow:"hidden",
},
contestContainer:{
  height: 180,
  width: 340,
  // backgroundColor: "#1F1D2B",
  marginBottom:35,
  borderRadius: 10,
  padding: 5,
  elevation:3,
},
});
