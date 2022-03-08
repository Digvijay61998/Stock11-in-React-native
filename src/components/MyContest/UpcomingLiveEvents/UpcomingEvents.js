import { StyleSheet, Text, View ,ScrollView, TouchableOpacity ,FlatList} from 'react-native'
import {IdolContest}from "../../../Common/index"

import React, { useState, useEffect }  from 'react';
import { dummyData, COLORS, FONTS, icons ,Header ,CardBox } from '../../../../constants';


const UpcomingEvents = ({navigation}) => {
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
                   <IdolContest data={item} />

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
});
