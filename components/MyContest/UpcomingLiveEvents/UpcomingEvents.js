import { StyleSheet, Text, View ,ScrollView, TouchableOpacity} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest} from "../../../constants"

import React from 'react';

const UpcomingEvents = ({navigation}) => {
  return (
    <View  style={Header}>
    <ScrollView style={styles.scroller}>
      <TouchableOpacity
         onPress={() => navigation.navigate("UpcomingContestDetails")}
      >
               <IdolContest/>
       </TouchableOpacity>
               <IdolContest/>
               <IdolContest/>
               <IdolContest/>
               <IdolContest/>
               <IdolContest/>
               <IdolContest/>
               </ScrollView>  
 </View>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({});
