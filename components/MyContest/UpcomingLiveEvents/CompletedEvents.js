import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { COLORS, FONTS, icons, Header, CardBox, dummyData } from "../../../constants"
import {IdolContest} from "../../../Common/index"

const CompletedEvents = ({ navigation }) => {

  const CompletedEvents = dummyData.PricePool

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
