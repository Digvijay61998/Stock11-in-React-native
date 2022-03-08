import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect }  from 'react';

// import { COLORS, FONTS, icons, Header, CardBox,dummyData } from "../../../constants"
import {IdolContest} from "../../../Common/index"
import { COLORS, FONTS, icons, Header, CardBox,dummyData } from '../../../../constants';

const LiveEvents = ({ navigation }) => {

  const LivePriceEvents = dummyData.LivePricePool
  
  const [LiveEvents,setLiveEvents]=useState()
  useEffect(() => {
    if(LivePriceEvents === undefined){
      setLiveEvents("")
    }else{
      setLiveEvents(LivePriceEvents)
    }
  });
  return (
    <View style={Header}>
      <ScrollView style={styles.scroller}>
        <FlatList
          data={LiveEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("LiveContestDetails")}
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

export default LiveEvents;

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
    overflow: "hidden",
  },
});
