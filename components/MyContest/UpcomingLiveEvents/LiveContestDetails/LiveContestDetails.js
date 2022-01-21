import { StyleSheet, Text, View , SafeAreaView, ScrollView,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, icons, Header, CardBox, IdolContest } from "../../../../constants"



const LiveContestDetails = ({navigation}) => {

    const [leadboardstack, setLeadboardstack]=useState(false);

    const WinningStick =()=>{
        setLeadboardstack(false)
    }

    const LeaderboardStick =()=>{
        setLeadboardstack(true)
    }

  return (
<SafeAreaView style={styles.container}>
      <View style={[CardBox, { backgroundColor: COLORS.primary }]}>
        <View style={styles.IdolContainer}>
          <View style={{alignItems:"flex-end"}}>
           <Text style={[FONTS.ItsLiveFont ,{fontSize:10, right:10}]}>Its live...!!!</Text>
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
            <Text style={FONTS.ItsLiveFont}>Its live...!!!</Text>
            <Text style={{ color: "black", backgroundColor:COLORS.ActiveButton, padding:6 ,borderRadius:10 , fontWeight: 'bold',}}>Rs. 1,000</Text>
          </View>
          <View style={{alignItems:"center",top:15}}>
          <Text style={[FONTS.textstyle,{fontSize:11}]}> Join with<Text style={{ color: COLORS.ActiveButton }}> T1 Team</Text> </Text>
          </View>
        </View>
        <View>
             <Text style={[FONTS.textstyle,{fontSize:9 , left:10 , top:10}]}>Total Joined:<Text style={[FONTS.textstyle,{fontSize:11 , left:10}]}> 5 Teams</Text></Text> 
          </View>
      </View>
      <View style={styles.WinningsContainer}>
        <View style={{ justifyContent: "space-around", flexDirection:"row",alignItems: "center", backgroundColor: COLORS.HeaderBackground, height: 50 }}>
       <TouchableOpacity
       style={{backgroundColor: leadboardstack === true ? COLORS.primary:COLORS.ActiveButton, flex:1 ,height:50,alignItems:"center" , justifyContent:"center"}}
       onPress={() => WinningStick()}
       >
             <Text style={[FONTS.textstyle,{fontSize:18}]}>Winnings</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{backgroundColor: leadboardstack === false ? COLORS.primary:COLORS.ActiveButton, flex:1 ,height:50,alignItems:"center" , justifyContent:"center"}}
       onPress={() => LeaderboardStick()}
      >
        <Text style={[FONTS.textstyle,{fontSize:18}]}>Leaderboard</Text>
        </TouchableOpacity>
        </View>
        { leadboardstack == false ?<>
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
        </>
       :<>
       <View style={styles.WinningTitleList}>
        <Text style={FONTS.textstyle}>All Teams (5)</Text>
        <Text style={FONTS.textstyle}>Points</Text>
        <Text style={FONTS.textstyle}>Rank</Text>
      </View>
      <ScrollView>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
      <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamABC</Text>
          <Text style={FONTS.textstyle}>150</Text>
          <Text style={FONTS.textstyle}>1</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>Team123</Text>
          <Text style={FONTS.textstyle}>145</Text>
          <Text style={FONTS.textstyle}>2</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamJKL</Text>
          <Text style={FONTS.textstyle}>149</Text>
          <Text style={FONTS.textstyle}>3</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamALC</Text>
          <Text style={FONTS.textstyle}>90</Text>
          <Text style={FONTS.textstyle}>4</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamWFC</Text>
          <Text style={FONTS.textstyle}>80</Text>
          <Text style={FONTS.textstyle}>5</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamKAL</Text>
          <Text style={FONTS.textstyle}>70</Text>
          <Text style={FONTS.textstyle}>6</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamLAL</Text>
          <Text style={FONTS.textstyle}>75</Text>
          <Text style={FONTS.textstyle}>7</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamABC</Text>
          <Text style={FONTS.textstyle}>150</Text>
          <Text style={FONTS.textstyle}>1</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>Team123</Text>
          <Text style={FONTS.textstyle}>145</Text>
          <Text style={FONTS.textstyle}>2</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamJKL</Text>
          <Text style={FONTS.textstyle}>149</Text>
          <Text style={FONTS.textstyle}>3</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamALC</Text>
          <Text style={FONTS.textstyle}>90</Text>
          <Text style={FONTS.textstyle}>4</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamWFC</Text>
          <Text style={FONTS.textstyle}>80</Text>
          <Text style={FONTS.textstyle}>5</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamKAL</Text>
          <Text style={FONTS.textstyle}>70</Text>
          <Text style={FONTS.textstyle}>6</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("EarnedPoints")}
        >
        <View style={styles.LeaderboardList}>
          <Text style={FONTS.textstyle}>TeamLAL</Text>
          <Text style={FONTS.textstyle}>75</Text>
          <Text style={FONTS.textstyle}>7</Text>
        </View>
        </TouchableOpacity>
        </ScrollView>
      </>
      
      }
        </View>
    </SafeAreaView>

  );
};

export default LiveContestDetails;

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