import { StyleSheet, Text, View , SafeAreaView, ScrollView,TouchableOpacity,FlatList} from 'react-native';
import React, { useState ,useEffect} from 'react';
import { COLORS, FONTS, icons, Header, CardBox,SIZES,Scale,verticalScale} from "../constants/index"

const LeadBoard = (props) => {
  console.log("props", props);
  const navigation = props.navigation.navigate
  const winningPrice = props.winning.prizeDTOS || []
  const winningStocks = props.winning.stockDTOS || []

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
  // const [liveContestranking, setLiveContestRanking]= useState([])
  // const [leaderBoardranking, setLeaderBoardRanking]= useState([])

  // useEffect(() => {
  //   if(winning === undefined){
  //     setLiveContestRanking("")
  //   }else{
  //     setLiveContestRanking(winning)
  //   }
  // });

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
              <>
  <View style={styles.WinningList}>
      <Text style={styles.textstyle}>{index+1}</Text>
      <Text style={styles.textstyle}>Rs {item.amount}/-</Text>
    </View>
      {/* <TouchableOpacity
      onPress={() => navigation.navigate("")}
      style={{backgroundColor:"red",width:100,height:10}}
 >
   <Text>CREATE BASKET</Text>
 </TouchableOpacity> */}
 </>
      )}
      keyExtractor={(item, index) => index}
     />
    </ScrollView>
   {props.name === "contestDetails" && <TouchableOpacity style={{backgroundColor:COLORS.secondary,borderRadius:20 ,width:Scale(180) ,padding:Scale(5),marginBottom:verticalScale(20)}}
   onPress={()=>{
     navigation.navigate('Wallet')
   }}
   >
    <Text style={{color:"white",textAlign:"center",fontSize:13}}>CREATE BASKET</Text>
    </TouchableOpacity>}
    </>:<></>}
    { leadboardstack === "STOCKS" ? <>
   <ScrollView>
   <FlatList 
            data = {winningStocks}
            keyExtractor={(item) => item.id}
            renderItem={({item ,index})=>(
  <View style={{ width:Scale(300) ,alignItems:"center",justifyContent:"center",marginTop:verticalScale(15)}}>
      <Text style={{fontSize:16 ,backgroundColor:"#e7f0f2",width:Scale(300),height:Scale(35),borderRadius:50,textAlign:"center",textAlignVertical:"center"}}>{item.stocksName}</Text>
    </View>
    
      )}
      keyExtractor={(item, index) => index}
     />
    </ScrollView>
    </>:<></>}
   
    { leadboardstack === "LEADERBOARD" ? <>
  <ScrollView>
  <FlatList 
            data = {""}
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
      textstyle: {
        color: "black",
        fontSize: 16,
      },
      WinningsContainer: {
        backgroundColor:"#fcf3ff",
        flex: 1,
        top:Scale(-10),
        borderRadius: 20,
        marginBottom:Scale(15),
        width:Scale(340),
        overflow: "hidden",
        justifyContent:"center",
        alignItems:"center",
      },
      WinningTitleList: {
        justifyContent:"space-between",
        flexDirection: "row",
        backgroundColor:"#bfdedc",
        width:Scale(300),
        marginTop:verticalScale(25),
        marginBottom:verticalScale(20),
        borderRadius:50,
        paddingTop:verticalScale(10),
        paddingBottom:verticalScale(10),
        paddingLeft:20,
        paddingRight:20,
        color:"white",
        // borderBottomWidth: 2,
      },
      WinningList: {
        justifyContent: "space-between",
        paddingBottom:verticalScale(10),
        flexDirection: "row",
        width:Scale(270),
        padding: Scale(15),
        borderColor: "#e2e2e2",
        borderBottomWidth: 1,

      },
      LeaderboardList: {
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection: "row",
        top:verticalScale(20),
        marginTop:verticalScale(15),
        width:Scale(300),
        paddingLeft:Scale(20),
        paddingRight:Scale(20),
        height:Scale(35),
        borderRadius:20,
        backgroundColor:"#e7f0f2"
      },
      headerTextstyle:{
        color:"#FFFF",
        fontWeight:"bold",
        fontSize:14,
        width:Scale(140),
        right:Scale(10),
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
        width:Scale(140),
        right:Scale(10),
        top:verticalScale(-10),
      },
      headerTextStockACtive:{
        fontSize:14, 
        fontWeight:"bold",
        color:COLORS.secondary,
        width:Scale(140),
        right:Scale(-44),
        top:verticalScale(-10),
      },
      headerBackgroundActive:{
        backgroundColor:COLORS.lightPink,
        borderRadius:15,
         flex:1 ,
         paddingLeft:50,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
         width:Scale(120),
         height:Scale(70),
         alignItems:"center" , 
         justifyContent:"center"
      },
      headerBackgroundInactive:{
        backgroundColor: "#2e7588",
        flex:1 ,
        width:Scale(50),
        paddingLeft:Scale(50),
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        height:Scale(50),
        alignItems:"center" , 
        justifyContent:"center"
      },
      StockheaderActive:{
        backgroundColor:COLORS.lightPink,
        flex:1 ,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        height:Scale(70),
        width:Scale(20),
        alignItems:"center" , 
        justifyContent:"center"
      },
      StockheaderInactive:{
        backgroundColor: "#2e7588",
        flex:1 ,
        width:Scale(50),
        height:Scale(50),
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        alignItems:"center" , 
        justifyContent:"center"
      }


});
