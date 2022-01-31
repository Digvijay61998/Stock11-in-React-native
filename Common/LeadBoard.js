import { StyleSheet, Text, View , SafeAreaView, ScrollView,TouchableOpacity,FlatList} from 'react-native';
import React, { useState ,useEffect} from 'react';
import { COLORS, FONTS, icons, Header, CardBox} from "../constants/index"

const LeadBoard = ({winning,leaderBoard}) => {

  const [leadboardstack, setLeadboardstack]=useState(false);

  const WinningStick =()=>{
      setLeadboardstack(false)
  }

  const LeaderboardStick =()=>{
      setLeadboardstack(true)
  }
  const [liveContestranking, setLiveContestRanking]= useState([])
  const [leaderBoardranking, setLeaderBoardRanking]= useState([])

  useEffect(() => {
    if(winning === undefined){
      setLiveContestRanking("")
    }else{
      setLiveContestRanking(winning)
    }
  });

  useEffect(() => {
    if(leaderBoard === undefined){
      setLeaderBoardRanking("")
    }else{
      setLeaderBoardRanking(leaderBoard)
    }
  });
  return (
      <>  
  <View style={[CardBox, { backgroundColor: COLORS.primary }]}>
    <View style={styles.IdolContainer}>
      <View style={{alignItems:"flex-end"}}>
       <Text style={[FONTS.ItsLiveFont ,{fontSize:10, right:10 ,color:"red"}]}>Its live...!!!</Text>
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
   <FlatList 
            data = {liveContestranking}
            keyExtractor={(item) => item.id}
            renderItem={({item ,index})=>(
  <View style={styles.WinningList}>
      <Text style={FONTS.textstyle}>#1</Text>
      <Text style={FONTS.textstyle}>.............................</Text>
      <Text style={FONTS.textstyle}>Rs 5,000</Text>
    </View>
      )}
      keyExtractor={(item, index) => index}
     />
    </ScrollView>
    </>
   :<>
   <View style={styles.WinningTitleList}>
    <Text style={FONTS.textstyle}>All Teams (5)</Text>
    <Text style={FONTS.textstyle}>Points</Text>
    <Text style={FONTS.textstyle}>Rank</Text>
  </View>
  <ScrollView>
  <FlatList 
            data = {leaderBoardranking}
            keyExtractor={(item) => item.id}
            renderItem={({item ,index})=>(
    <TouchableOpacity
    onPress={() => navigation.navigate("EarnedPoints")}
    >
  <View style={styles.LeaderboardList}>
      <Text style={FONTS.textstyle}>TeamABC</Text>
      <Text style={FONTS.textstyle}>150</Text>
      <Text style={FONTS.textstyle}>1</Text>
    </View>
    </TouchableOpacity>
       )}
       keyExtractor={(item, index) => index}
      />
    </ScrollView>
  </>
  
  }
    </View>
    </>

  );
};

export default LeadBoard;

const styles = StyleSheet.create({
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
