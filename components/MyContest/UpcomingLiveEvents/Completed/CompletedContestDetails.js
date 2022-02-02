import { StyleSheet, Text, View , SafeAreaView, ScrollView,TouchableOpacity,FlatList} from 'react-native';
import React, { useState ,useEffect} from 'react';
import { COLORS, FONTS, icons, Header, CardBox,dummyData} from "../../../../constants"
import {LeadBoard} from "../../../../Common/index" 


const CompletedContestDetails = ({navigation}) => {

 
  const winningdata = dummyData.WinningList
  const leaderBoarddata = dummyData.LeadBoard
  const navigations = navigation

  return (
<SafeAreaView style={styles.container}>
      <LeadBoard winning ={winningdata} leaderBoard={leaderBoarddata} navigation={navigations}/>
    </SafeAreaView>
  );
};

export default CompletedContestDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:COLORS.secondary,
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
          margin:15,
          width: "90%",
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
          marginRight: 10,
        },
        LeaderboardList: {
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#525460",}
});
