import React, { useState, useEffect }  from 'react';

import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { COLORS, FONTS, icons, Header, CardBox, dummyData } from '../../../../constants';
// import { COLORS, FONTS, icons, Header, CardBox, dummyData } from "../../../constants"
import {IdolContest} from "../../../Common/index"

const CompletedEvents = ({ navigation }) => {
  const [CompletedEvents,setCompletedEvents]=useState()

  const CompletedPriceEvents = dummyData.CompletedPricePool

  useEffect(() => {
    if(CompletedPriceEvents === undefined){
      setCompletedEvents("")
    }else{
      setCompletedEvents(CompletedPriceEvents)
    }
  });

  return (
    <View style={Header}>
      <ScrollView style={styles.scroller}>
        <FlatList
          data={CompletedEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CompletedContestDetails')
              }
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

export default CompletedEvents;

const styles = StyleSheet.create({

  scroller: {
    flex: 1,
    overflow: "hidden",
  },
});
