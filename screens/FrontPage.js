import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons, SIZES } from "../constants"

 

const FrontPage = ({navigation}) => {
  return (
    <LinearGradient
    colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
        <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 150,
           height: 150,
           marginTop:-40
 }}
  />
  <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:20}}>
  <Text style={styles.headingTitle}>MADE </Text><Text style={styles.headingTitle}>FOR BULLS,</Text><Text style={[styles.headingTitle,{fontSize:18}]}>BIG OR SMALL!</Text>
  </View>
  <View style={styles.video}>
  </View>
  <View style={{width:"50%",marginTop:20,justifyContent:"space-evenly",alignItems:"center",flexDirection:"row"}}>
  <TouchableOpacity style={{width:15,height:15,borderRadius:50,backgroundColor:COLORS.ActiveWhite}}></TouchableOpacity>
  <TouchableOpacity style={{width:15,height:15,borderRadius:50,backgroundColor:COLORS.FaintWhite}}></TouchableOpacity>
  <TouchableOpacity style={{width:15,height:15,borderRadius:50,backgroundColor:COLORS.FaintWhite}}></TouchableOpacity>
  <TouchableOpacity style={{width:15,height:15,borderRadius:50,backgroundColor:COLORS.FaintWhite}}></TouchableOpacity>

  </View>
  <View style={{justifyContent:"space-around",alignItems:"center",flexDirection:"row",marginTop:40}}>
  <TouchableOpacity
                  style={{
                      width:139,
                      margin:15,
                      borderRadius:50,
                      height:37,
                      alignItems:"center",
                      opacity: 1,
                    marginLeft:30,
                     zIndex:2,
                      backgroundColor:COLORS.white,
                   }}
                   color="#f5871f00"
                   elevation="2"
                   onPress={() =>{
                    navigation.navigate('LoginScreen');
                   }}>                  
  <View style={{paddingTop:5}}>
    <Text style={[FONTS.textstyle ,{color:"black"}]}>REGISTER</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity
                  style={{
                      width:139,
                      margin:15,
                      borderRadius:50,
                      height:37,
                      alignItems:"center",
                      opacity: 1,
                     zIndex:2,
                      backgroundColor:COLORS.white,
                   }}
                   color="#f5871f00"
                   elevation="2"
                   onPress={() =>{
                    // handleSubmit()
                   }}>                  
  <View style={{paddingTop:5}}>
    <Text style={[FONTS.textstyle ,{color:"black"}]}>LOGIN</Text>
  </View>
  </TouchableOpacity>
  </View>
  <Image
    source={icons.FrontPageAroow1}
    resizeMode="contain"
    style={{
        position:"absolute",
        left:-10,
        top:300,
        zIndex:1

    }}
  />
  <Image
    source={icons.FrontPageAroow}
    resizeMode="contain"
    style={{

        position:"absolute",
        top:570,
        width:"150%",
        right:20,
        zIndex:1

    }}
  />
 
      </LinearGradient>
  )
}

export default FrontPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    },
    headingTitle:{
        color:"white" ,
        letterSpacing:1,
        fontSize:28,
        fontWeight:"bold"
    },
    video:{
        width:SIZES.width-50,
        height:239,
        borderRadius:10,
        zIndex:2,
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:COLORS.secondary
    }
})