import { StyleSheet, Text, View ,ScrollView ,TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest} from "../../../constants"


const LiveEvents = ({navigation}) => {
  return (
    <View style={Header}>
      <ScrollView>
      <TouchableOpacity
         onPress={() => navigation.navigate("LiveContestDetails")}
      >
      <IdolContest/>
      </TouchableOpacity>
      
      <IdolContest/>
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

export default LiveEvents;

const styles = StyleSheet.create({});
