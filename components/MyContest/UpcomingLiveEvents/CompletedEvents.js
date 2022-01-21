import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest} from "../../../constants"

const CompletedEvents = () => {
  return (
    <View  style={Header}>
       <ScrollView style={styles.scroller}>
                  <IdolContest/>
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

export default CompletedEvents;

const styles = StyleSheet.create({});
