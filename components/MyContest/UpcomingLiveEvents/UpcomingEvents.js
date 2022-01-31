import { StyleSheet, Text, View ,ScrollView, TouchableOpacity ,FlatList} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox,dummyData} from "../../../constants"
import {IdolContest}from "../../../Common/index"

import React from 'react';

const UpcomingEvents = ({navigation}) => {

  const UpcomingPriceEvents = dummyData.PricePool


  return (
    <View  style={Header}>
    <ScrollView style={styles.scroller}>
    <FlatList 
                data = {UpcomingPriceEvents}
                keyExtractor={(item) => item.id}
                renderItem={({item ,index})=>(
                  <TouchableOpacity
                  onPress={() => navigation.navigate("UpcomingContestDetails")}
               >
                   <IdolContest data={item}/>
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
