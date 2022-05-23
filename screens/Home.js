import React, { useEffect, useState } from 'react';

import { StyleSheet,View, Text, TouchableOpacity, ScrollView,Image} from 'react-native';

import Contest from "../src/components/Contest/Contest.js"
import MyContest from "../src/components/MyContest/MyContest"
import { COLORS, icons ,Header,Scale,verticalScale} from "../src/constants"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Confirmation from '../src/components/Contest/Confirmation.js';
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
        <View style={{width:Scale(375), flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
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
  <Image 
  source={icons.Notification}
  resizeMode="cover"
  style={{
      width:30,
      height:30
    }}
  />
  </TouchableOpacity>
  </View>
            <View style={[Header,{top:verticalScale(50)}]}>
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
       {homeMenu === "JOINCONTEST" ? <Contest Contest="contest"/> :<MyContest Mycontest="myContest"/>}
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
        header:{
            width:Scale(330),
            height:Scale(70),
            justifyContent:"space-between",
            alignItems:"center",
            flexDirection:"row",
        },
        headerMenu:{
            width:Scale(165),
            backgroundColor:COLORS.lightPink,
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            height:Scale(50),
            marginTop:verticalScale(30),
            alignItems:"center",
            justifyContent:"center",
        },
        headerMenuInActive:{
            width:Scale(165),
            backgroundColor:"#317e93",
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            height:Scale(40),
            marginTop:verticalScale(40),
            alignItems:"center",
            justifyContent:"center",
        }
        })

export default Home;