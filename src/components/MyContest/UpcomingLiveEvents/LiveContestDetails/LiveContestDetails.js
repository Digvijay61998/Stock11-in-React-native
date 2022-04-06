import { StyleSheet, Text, View , SafeAreaView, ScrollView,TouchableOpacity ,FlatList,Image,ImageBackground} from 'react-native';
import React, { useState,useEffect ,useRef } from 'react';
import { COLORS, FONTS, icons, Header, CardBox, IdolContest ,dummyData,SIZES} from "../../../../constants"
import {LeadBoard} from "../../../../Common"
import LinearGradient from 'react-native-linear-gradient'
import Carousel,{Pagination} from 'react-native-snap-carousel';


const CarouselCardItem = ({ item, index }) => {
  return (
    
    <ImageBackground
    resizeMode="cover"
    source={icons.card1}
    style={styles.contestContainer}
    >
<View style={[styles.IdolContainer,{width:280}]}>
<View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%"}}>
    <Text style={{fontSize:14 ,color:"#032F81" ,fontWeight:"bold" ,fontFamily:"lato"}}>NIFTY FIFTY</Text>
    <View></View>
</View>
<View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" ,marginTop:-10}}>
    <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
        <Text style={{ color: "black" , fontSize:17,fontWeight:"bold" }}>WIN Rs.10,000/-</Text>
        <Text style={{ color: "black" , fontSize:12}}>ENTRY FEE: Rs.1000/-</Text>
        <Text style={{ color: "#45444" , fontSize:14,fontWeight:"bold"}}>3 Winners</Text>
   
    </View>
<View style={{justifyContent:"center",alignItems:"center"}}>
<Image 
    source={icons.IconUsers}
    resizeMode="contain"
    style={{
        width:30,
        height: 30,
       
}}
    />
    <Text style={{ color:COLORS.secondary, padding:6 ,borderRadius:10 , fontWeight: 'bold',}}>12344</Text>
    <Text style={{ color:COLORS.secondary,borderRadius:10 , fontWeight: 'bold',fontSize:11}}>Bulls</Text>
</View>
   
</View>
  <View style={{alignItems:"center",right:44,top:4}}>
  <View style={{width: 180, height: 5, backgroundColor:"#4caea7", borderRadius: 10 }}>
  </View>
  <View style={{ justifyContent: "space-between", flexDirection: "row", width:230}}>
    <Text style={[FONTS.textstyle ,{fontSize:8 }]}></Text>
    <Text  style={[FONTS.textstyle ,{fontSize:10,color:"black"}]}>No more Spots!</Text>
  </View>
  </View>
</View>
<View style={styles.TimeDate}>
<Text style={{ color: "black" ,borderRadius: 10,fontFamily: 'lato',fontSize:10}}>1st oct 3rd OCT,2022</Text>
</View>
</ImageBackground>
)
}

const LiveContestDetails = ({navigation}) => {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)

    const winningdata = dummyData.WinningList
    const leaderBoarddata = dummyData.LeadBoard
const navigations = navigation
  return (
    <LinearGradient
  colors={['#93d5ce', '#11a99d','#5700AD','#7e72c5' ]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.container}>
         <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 70,
           height: 70,
           top:5
 }}
  />
     <View style={{top:10,width:SIZES.width-120,alignItems:"center",justifyContent:"center"}}>
     <Carousel
        layout="tinder"
        layoutCardOffset={6}
        ref={isCarousel}
        data={winningdata}
        renderItem={CarouselCardItem}
        sliderWidth={SIZES.width-50}
        itemWidth={Math.round(SIZES.width * 0.7)}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
</View>
<View style={{width:SIZES.width-360,height:20,top:-30}}>
<Pagination
        dotsLength={winningdata.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 50,
          marginHorizontal: 0,
          backgroundColor: '#fff'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
</View>
<Text style={styles.textLive}>LIVE</Text>
          <LeadBoard winning ={winningdata} leaderBoard={leaderBoarddata} navigation={navigations}/>
          </LinearGradient>

  );
};

export default LiveContestDetails;

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
      contestContainer:{
        height: 151,
        width: 289,
        // backgroundColor: "#1F1D2B",
        marginBottom:35,
        borderRadius: 10,
        padding: 5,
        elevation:3,
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
        borderBottomColor: "#525460",},
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: "#1F1D2B",
      },
      shadow: {
          shadowColor: "#252837",
          shadowOffset: {
              width: 0,
              height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
      
          elevation: 8,
      },
      
      scroller: {
          flex: 1,
        overflow:"hidden",
      },
      
      TimeDate: {
          width: 325,
          height: 20,
          marginTop:-18,
          paddingLeft:8,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between",
          borderRadius: 5
      },
      IdolContainer: {
          position: "relative",
          width: 340,
          height: 140,
      },
      textstyle: {
          fontFamily: 'lato',
          color: "black",
          fontSize:16,
          fontWeight: 'bold',
      },
      
      // My Home menue
      Mycontestmenu:{
          position: "relative",
          justifyContent:"space-around",
          flexDirection: "row",
          width: 380,
          height: 60,
          backgroundColor: "#252837",
      },
      ActiveMycontest:{
          flex: 1,
         width: 120,
         borderTopRightRadius: 15,
         borderTopLeftRadius: 15,
          backgroundColor: COLORS.ActiveButton, 
          margin:2,
      },
      MycontestText:{ 
      top:18 ,
      left:24,
      color:"black",
      fontFamily: 'lato',
      fontSize:15,
      fontWeight: 'bold',
      },
      view:{
          backgroundColor:COLORS.secondary,
          color:COLORS.white,
          fontFamily:"bold",
          fontSize:12,
          width:70,
          height:30,
          marginBottom:35,
          paddingTop:6,
          textAlign:"center",
          borderRadius:40
      },
      textLive:{
        color:"white",
        fontWeight:"bold",
        borderColor:"white",
        borderWidth:2,
        borderRadius:5,
        paddingTop:2,
        paddingLeft:12,
        paddingRight:10
    }
    });
