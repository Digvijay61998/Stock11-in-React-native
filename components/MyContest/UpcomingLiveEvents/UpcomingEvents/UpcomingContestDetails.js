import { StyleSheet, Text, View, SafeAreaView ,ScrollView } from 'react-native';
import { COLORS, FONTS, icons, Header, CardBox, IdolContest } from "../../../../constants"

import React from 'react';

const UpcomingContestDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[CardBox, { backgroundColor: COLORS.primary }]}>
        <View style={styles.IdolContainer}>
          <View style={{alignItems:"flex-end"}}>
           <Text style={[FONTS.textstyle ,{fontSize:10}]}>Start On 1st Oct 2021</Text>
           </View>
          <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
            <Text style={FONTS.textstyle}>Idol Contest</Text>
            <Text style={FONTS.textstyle}>Entry</Text>
          </View>
          <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
              <Text style={{ color: "white", fontSize: 10, }}>prize pool</Text>
              <Text style={FONTS.textstyle}>Rs. 10,000</Text>
            </View>
            <Text style={{ color: "black", backgroundColor: COLORS.ActiveButton, padding: 6, borderRadius: 10, fontWeight: 'bold', }}>Rs. 1,000</Text>
          </View>
          <View style={{alignItems:"center",top:15}}>
          <Text style={[FONTS.textstyle,{fontSize:11}]}> Join with<Text style={{ color: COLORS.ActiveButton }}> T1 Team</Text> </Text>
          <View style={{ width: 180, height: 5, backgroundColor: COLORS.ActiveButton, borderRadius: 10 }}>
          </View>
          <View style={{ justifyContent: "space-between", flexDirection: "row", width:170}}>
            <Text style={[FONTS.textstyle ,{fontSize:8 }]}>3 Spots Left</Text>
            <Text  style={[FONTS.textstyle ,{fontSize:8}]}>3 Spots</Text>
          </View>
          </View>
        </View>
      </View>
      <View style={styles.WinningsContainer}>
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: COLORS.HeaderBackground, height: 50 }}>
          <Text style={[FONTS.textstyle,{fontSize:22}]}>Winnings</Text>
        </View>
        <View style={styles.WinningTitleList}>
          <Text style={FONTS.textstyle}>Ranks</Text>
          <Text style={FONTS.textstyle}>Winnings</Text>
        </View>
        <ScrollView>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#1</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 5,000</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#2</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 3,000</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#3</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 3,000</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#4</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 2,000</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#5</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 1,000</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#6</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 500</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#6</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 500</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#6</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 500</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#6</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 500</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#6</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 500</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#6</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 500</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#6</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 500</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#6</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 500</Text>
        </View>
        <View style={styles.WinningList}>
          <Text style={FONTS.textstyle}>#6</Text>
          <Text style={FONTS.textstyle}>.............................</Text>
          <Text style={FONTS.textstyle}>Rs 500</Text>
        </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UpcomingContestDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
  },
  scroller: {
    flex: 1,
    overflow: "hidden",
  },

  TimeDate: {
    width: 350,
    height: 30,
    backgroundColor: "#252837",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  IdolContainer: {
    position: "relative",
    width: 350,
    height: 140,
  },
  textstyle: {
    fontFamily: 'Poppins',
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },
  WinningsContainer: {
    backgroundColor: COLORS.primary,
    flex: 1,
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
    overflow: "hidden",
  },
  WinningTitleList: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#575966",
    marginLeft: 5,
    marginRight: 5
  },
  WinningList: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  }
});
