import { StyleSheet, Text, View , SafeAreaView, ScrollView,TouchableOpacity ,FlatList,Image,ImageBackground} from 'react-native';
import React, { useState,useEffect ,useRef} from 'react';
import { COLORS, FONTS, icons, Header, CardBox, IdolContest ,dummyData,SIZES} from "../../../../constants"
import LinearGradient from 'react-native-linear-gradient'

const Perfomance = ({navigation}) => {
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
    <LinearGradient
  colors={['#f8f8f8', '#dddddd','#bfbfbf','#b7b7b7' ]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={{width:SIZES.width-100,height:150,borderRadius:20,bottom:-30,zIndex:1,elevation:10,alignItems:"center",justifyContent:"center"}}>
 
      <Text style={{fontSize:18,fontWeight:"bold"}}>NIFTY FIFTY</Text>
      <Text style={{fontWeight:"bold",color:COLORS.secondary}}>OVERALL POINTS 99</Text>
      <Image source={icons.basket}
       resizeMode="contain"
       style={{position:"absolute",right:10,top:10}}
      />
   </LinearGradient>
<View style={styles.PerfomanceContainer}>
<Text style={{fontSize:18,fontWeight:"bold",color:"black",top:-10}}>BASKET PERFOMANCE</Text>
<View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>STOCKS</Text>
    <Text style={styles.headerTitle}>WEIGHTAGE</Text>
    <Text style={styles.headerTitle}>POINTS</Text>
</View>
<ScrollView>
<View style={styles.dataContainer}>
    <Text style={{color:"black",fontWeight:"bold"}}>HUL</Text>
    <Text style={styles.numberContainer}>8</Text>
    <Text style={styles.numberContainer}>1</Text>
</View>
<View style={styles.dataContainer}>
    <Text style={{color:"black",fontWeight:"bold"}}>HUL</Text>
    <Text style={styles.numberContainer}>8</Text>
    <Text style={styles.numberContainer}>1</Text>
</View>
<View style={styles.dataContainer}>
    <Text style={{color:"black",fontWeight:"bold"}}>HUL</Text>
    <Text style={styles.numberContainer}>8</Text>
    <Text style={styles.numberContainer}>1</Text>
</View>
<View style={styles.dataContainer}>
    <Text style={{color:"black",fontWeight:"bold"}}>HUL</Text>
    <Text style={styles.numberContainer}>8</Text>
    <Text style={styles.numberContainer}>1</Text>
</View>
<View style={styles.dataContainer}>
    <Text style={{color:"black",fontWeight:"bold"}}>HUL</Text>
    <Text style={styles.numberContainer}>8</Text>
    <Text style={styles.numberContainer}>1</Text>
</View>
<View style={styles.dataContainer}>
    <Text style={{color:"black",fontWeight:"bold"}}>HUL</Text>
    <Text style={styles.numberContainer}>8</Text>
    <Text style={styles.numberContainer}>1</Text>
</View>
<View style={styles.dataContainer}>
    <Text style={{color:"black",fontWeight:"bold"}}>HUL</Text>
    <Text style={styles.numberContainer}>8</Text>
    <Text style={styles.numberContainer}>1</Text>
</View>
<View style={styles.dataContainer}>
    <Text style={{color:"black",fontWeight:"bold"}}>HUL</Text>
    <Text style={styles.numberContainer}>8</Text>
    <Text style={styles.numberContainer}>1</Text>
</View>
</ScrollView>
</View>
   </LinearGradient>
  )
}

export default Perfomance

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:COLORS.secondary,
        },
        PerfomanceContainer:{
            top:-40,
            width:SIZES.width-30,
            paddingTop:100,
            borderRadius:20 ,
            backgroundColor:"#fcf6ff",
            height:SIZES.height-250,
            justifyContent:'flex-start',
            alignItems:"center"
        },
        headerTitle:{
            color:"black",
            fontWeight:"bold"
        },
        headerContainer:{
            width:SIZES.width-100,
            height:30,
            alignItems:"center",
            justifyContent:"space-around",
            flexDirection:"row",
            borderTopWidth:1,
            borderBottomWidth:1,
            borderColor:"#e7e4e7"
        },
        dataContainer:{
            width:SIZES.width-100,
            height:35,
            alignItems:"center",
            justifyContent:"space-around",
            flexDirection:"row",
            backgroundColor:"#e7f0f2",
            borderRadius:20,
            marginTop:20
        },
        numberContainer:{
            color:"black",
            fontWeight:"bold" ,
            backgroundColor:"#FFF",
            padding:2,
            paddingLeft:10,
            paddingRight:10
        }
})