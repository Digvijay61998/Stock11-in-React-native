import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, Header, CardBox, IdolContest, dummyData } from "../../../constants"


const LiveEvents = ({ navigation }) => {

  const LivePriceEvents = dummyData.PricePool

  return (
    <View style={Header}>
      <ScrollView style={styles.scroller}>
        <FlatList
          data={LivePriceEvents}
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
