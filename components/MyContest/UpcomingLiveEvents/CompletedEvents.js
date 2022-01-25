import React from 'react';
import { StyleSheet, Text, View ,ScrollView ,TouchableOpacity} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest} from "../../../constants"

const CompletedEvents = ({navigation}) => {
  return (
    <View  style={Header}>
       <ScrollView style={styles.scroller}>
       <TouchableOpacity 
           onPress={() =>
            navigation.navigate('CompletedContestDetails')
          }
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

export default CompletedEvents;

const styles = StyleSheet.create({

  scroller: {
    flex: 1,
  overflow:"hidden",
},
});
