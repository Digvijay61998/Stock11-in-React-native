import { StyleSheet, Text, View , SafeAreaView, ScrollView,TouchableOpacity,FlatList} from 'react-native';
import React, { useState ,useEffect} from 'react';
import { COLORS, FONTS, icons, Header, CardBox,SIZES} from "../constants/index"

const LeadBoard = ({winning,leaderBoard,navigation,name}) => {
  console.log("props",winning[0]);
  const winningPrice = winning.prizeDTOS || []
  const winningStocks = winning.stockDTOS || []

  const [leadboardstack, setLeadboardstack]=useState("WINNINGS");

  const WinningStick =()=>{
      setLeadboardstack("WINNINGS")
  }
  const Stockstick =()=>{
    setLeadboardstack("STOCKS")
}
  const LeaderboardStick =()=>{
      setLeadboardstack("LEADERBOARD")
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
    <View style={{ justifyContent: "space-around", flexDirection:"row",alignItems: "center" ,width:SIZES.width-40 ,position:"relative" ,top:10}}>
   <TouchableOpacity 
   style={ leadboardstack === "WINNINGS" ? styles.headerBackgroundActive : styles.headerBackgroundInactive}
   onPress={() => WinningStick()}
   >
         <Text style={leadboardstack === "WINNINGS" ? styles.headerTextstyleACtive : styles.headerTextstyle} id="WINNINGS">WINNINGS PRIZE</Text>
    </TouchableOpacity>
    <TouchableOpacity
   style={ leadboardstack === "STOCKS" ? styles.StockheaderActive : styles.StockheaderInactive}
   onPress={() => Stockstick()}
   >
         <Text style={leadboardstack === "STOCKS" ? styles.headerTextStockACtive : styles.headerTextStockInactive} id="STOCKS">STOCKS</Text>
    </TouchableOpacity>
    <TouchableOpacity
   style={ leadboardstack === "LEADERBOARD" ? styles.headerBackgroundActive : styles.headerBackgroundInactive}
   onPress={() => LeaderboardStick()}
  >
    <Text style={leadboardstack === "LEADERBOARD" ? styles.headerTextstyleACtive : styles.headerTextstyle} >LEADERBOARD</Text>
    </TouchableOpacity>
    </View>
  <View style={styles.WinningsContainer}>
    { leadboardstack === "WINNINGS" ? <>
     <View style={styles.WinningTitleList}>
      <Text style={[styles.headerTextstyle,{right:5,color:"black",fontWeight:"600"}]}>RANK</Text>
      <Text style={[styles.headerTextstyle,{right:-10,color:"black",fontWeight:"600"}]}>WINNINGS PRIZE</Text>
    </View>
   <ScrollView>
   <FlatList 
            data = {winningPrice}
            keyExtractor={(item) => item.id}
            renderItem={({item ,index})=>(
  <View style={styles.WinningList}>
      <Text style={styles.textstyle}>{index+1}</Text>
      <Text style={styles.textstyle}>Rs {item.amount}/-</Text>
    </View>
    
      )}
      keyExtractor={(item, index) => index}
     />
    </ScrollView>
   {name === "follow Contest" && <TouchableOpacity style={{backgroundColor:COLORS.secondary,borderRadius:20 ,width:SIZES.width-200 ,padding:5,marginBottom:20}}
   onPress={()=>{
     navigation.navigate("Perfomance")
   }}
   >
    <Text style={{color:"white",textAlign:"center",fontSize:13}}>JOIN</Text>
    </TouchableOpacity>}
    {name === "Completed" && <TouchableOpacity style={{backgroundColor:COLORS.secondary,borderRadius:20 ,width:SIZES.width-200 ,padding:5,marginBottom:20}}
   onPress={()=>{
     navigation.navigate("Perfomance")
   }}
   >
    <Text style={{color:"white",textAlign:"center",fontSize:13}}>MY BASKET PERFOMANCE</Text>
    </TouchableOpacity>}
    </>:<></>}
    { leadboardstack === "STOCKS" ? <>
   <ScrollView>
   <FlatList 
            data = {winningStocks}
            keyExtractor={(item) => item.id}
            renderItem={({item ,index})=>(
  <View style={{ width:SIZES.width-80 ,alignItems:"center",justifyContent:"center",marginTop:15}}>
      <Text style={{fontSize:16 ,backgroundColor:"#e7f0f2",width:300,height:35,borderRadius:50,textAlign:"center",textAlignVertical:"center"}}>{item.stocksName}</Text>
    </View>
    
      )}
      keyExtractor={(item, index) => index}
     />
    </ScrollView>
    </>:<></>}
   
    { leadboardstack === "LEADERBOARD" ? <>
  <ScrollView>
  <FlatList 
            data = {leaderBoardranking}
            keyExtractor={(item) => item.id}
            renderItem={({item ,index})=>(
  <View style={styles.LeaderboardList}>
      <View style={{justifyContent:"center",alignItems: "center",flexDirection: "row"}}>
        <Text style={{height:28, width:28}}>{item.rank}</Text>
        </View>
        <Text style={styles.textstyle}>Team{item.team}</Text>
      <Text style={[styles.textstyle,{marginRight:10}]}>{item.rank}</Text>
    </View>
       )}
       keyExtractor={(item, index) => index}
      />
    </ScrollView>
  </>:<></>}
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
        color: "black",
        fontSize: 16,
      },
      BoxContainer: {
        backgroundColor:"#fcf3ff",
        flex: 1,
        borderRadius: 10,
        margin:15,
        width: "90%",
        overflow: "hidden",
        justifyContent:"center",
        alignItems:"center",
      },
      WinningsContainer: {
        backgroundColor:"#fcf3ff",
        flex: 1,
        top:-10,
        borderRadius: 20,
        marginBottom:15,
        width:SIZES.width-40,
        overflow: "hidden",
        justifyContent:"center",
        alignItems:"center",
      },
      WinningTitleList: {
        justifyContent:"space-between",
        flexDirection: "row",
        backgroundColor:"#bfdedc",
        width:300,
        marginTop:25,
        marginBottom:20,
        borderRadius:50,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        color:"white",
        // borderBottomWidth: 2,
      },
      WinningList: {
        justifyContent: "space-between",
        paddingBottom:10,
        flexDirection: "row",
        width:270,
        padding: 15,
        borderColor: "#e2e2e2",
        borderBottomWidth: 1,

      },
      LeaderboardList: {
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection: "row",
        top:20,
        marginTop:15,
        width:300,
        paddingLeft:20,
        paddingRight:20,
        height:35,
        borderRadius:20,
        backgroundColor:"#e7f0f2"
        // padding: 10,
        // marginLeft: 10,
        // marginRight: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: "#525460",
      },
      headerTextstyle:{
        color:"#FFFF",
        fontWeight:"bold",
        fontSize:14,
        width:140,
        right:10,
      },
      headerTextStockInactive:{
        color:"#FFFF",
        fontWeight:"bold",
        fontSize:14,
      },
      headerTextstyleACtive:{
        fontSize:14, 
        fontWeight:"bold",
        color:COLORS.secondary,
        width:140,
        right:10,
        top:-10,
      },
      headerTextStockACtive:{
        fontSize:14, 
        fontWeight:"bold",
        color:COLORS.secondary,
        width:140,
        right:-44,
        top:-10,
      },
      headerTextstyleInactive:{
        color:"#FFFF",
        fontWeight:"bold",
        fontSize:16
      },
      headerBackgroundActive:{
        backgroundColor:COLORS.lightPink,
        borderRadius:15,
         flex:1 ,
         paddingLeft:50,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
         width:120,
         height:70,
         alignItems:"center" , 
         justifyContent:"center"
      },
      headerBackgroundInactive:{
        backgroundColor: "#2e7588",
        flex:1 ,
        width:50,
        paddingLeft:50,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        height:50,
        alignItems:"center" , 
        justifyContent:"center"
      },
      StockheaderActive:{
        backgroundColor:COLORS.lightPink,
        flex:1 ,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        height:70,
        width:20,
        alignItems:"center" , 
        justifyContent:"center"
      },
      StockheaderInactive:{
        backgroundColor: "#2e7588",
        flex:1 ,
        width:50,
        height:50,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        alignItems:"center" , 
        justifyContent:"center"
      }


});
