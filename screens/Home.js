import React, { useEffect, useState } from 'react';

import { StyleSheet,View, Text, TouchableOpacity, ScrollView,Image} from 'react-native';

import Contest from "../components/Contest/Contest.js"
import MyBasket from "../components/MyBasket/MyBasket.js"
import MyContest from "../components/MyContest/MyContest.js"
import ViewContest from "../components/Contest/ViewContest.js"
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData, SIZES} from "../constants"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Confirmation from '../components/Contest/Confirmation.js';
import LinearGradient from 'react-native-linear-gradient'


const Tab = createMaterialTopTabNavigator();
const Home = ({ route,navigation }) => {
    const [homeMenu ,setHomeMenu]=useState("JOINCONTEST")

function handleJoinContest (){
    setHomeMenu("JOINCONTEST")
}
function handleMyContest (){
    setHomeMenu("MYCONTEST")
}

const navigations = navigation
    return (
        <>
        <View>
        {
            (route.params &&
            route.params.component === 'Select Basket') &&
                <Confirmation navigation={navigations}/>
        }
        </View>
          <LinearGradient
        colors={['#93d5ce', '#11a99d','#5700AD','#7e72c5' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
        > 
        <View style={{width:SIZES.width ,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
       <View></View>
        <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 70,
           height: 70,
 }}
  />
  <TouchableOpacity 
  onPress={()=>{
      navigation.navigate("Notification")
  }}
  >
  <View style={{backgroundColor:"red",width:10,height:10,borderRadius:20}}></View>
  </TouchableOpacity>
  </View>
            <View style={[Header,{top:50}]}>
                <View style={{
                      justifyContent:"center",
                      alignItems:"center",
                      flexDirection:"column",
                     flex: 1,
                }}>
        <View style={styles.header}>
       <TouchableOpacity
       style={homeMenu === "JOINCONTEST" ? [styles.headerMenu]:[styles.headerMenuInActive]} id="JOINCONTEST"
       onPress={() => handleJoinContest()}
      >
          <Text style={{fontWeight:"bold",fontSize:16 ,color:homeMenu === "JOINCONTEST" ?  COLORS.secondary :"white"}}>JOIN CONTEST</Text>
       </TouchableOpacity>
       <TouchableOpacity
       style={homeMenu === "MYCONTEST" ? [styles.headerMenu]:[styles.headerMenuInActive]} id="MYCONTEST"
       onPress={() => handleMyContest()}
       >
          <Text style={{fontWeight:"bold",fontSize:16 ,color:homeMenu === "MYCONTEST" ? COLORS.secondary :"white" }}>MY CONTEST</Text>

       </TouchableOpacity>
       </View>
       <View style={{height:550,backgroundColor:"white" ,marginBottom:40,borderRadius:20}}>
       {homeMenu === "JOINCONTEST" ? <Contest/> :<MyContest/>}
      </View>
                 </View>

            </View>

        </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
        elevation: 10,
        

    },
    shadow: {
        shadowColor: COLORS.HeaderBackground,
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
      
    },
    IdolConte: {
        height: 180,
        width: 360,
        backgroundColor: COLORS.HeaderBackground,
        margin: "4%",
        borderRadius: 10,
        padding: 5,
        
    },
    TimeDate: {
        width: 350,
        height: 30,
        backgroundColor: COLORS.HeaderBackground,
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
        fontSize:16,
        fontWeight: 'bold',
    },
    MycontestText:{ 
        bottom:10,
    fontFamily: 'Poppins',
    fontSize:15,
    fontWeight: 'bold',
},
header:{
    width:330,
    height:70,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
},
headerMenu:{
    width:165,
    backgroundColor:"#ffff",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height:50,
    marginTop:30,
    alignItems:"center",
    justifyContent:"center",
},
headerMenuInActive:{
    width:165,
    backgroundColor:"#317e93",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height:40,
    marginTop:40,
    alignItems:"center",
    justifyContent:"center",
}
})

export default Home;