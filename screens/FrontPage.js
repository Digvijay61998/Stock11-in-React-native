import { StyleSheet, Text, View,Image ,TouchableOpacity,Video} from 'react-native'
import React,{useState,useRef, useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons, SIZES } from "../src/constants"
import AsyncStorage from "@react-native-async-storage/async-storage";
import Carousel,{Pagination} from 'react-native-snap-carousel';
// import Video from 'react-native-video';

const data = [
  {
    title: "Aenean leo",
    VideoUrl: icons.video1
  },
  {
    title: "In turpis",
    VideoUrl:icons.video2
  },
  {
    title: "Lorem Ipsum",
    VideoUrl: icons.video3
  },
  {
    title: "Lorem Ipsum",
    VideoUrl: icons.video1
  }
]
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
        {/* <Video  
            source={video}                  // the video file
            paused={false}                  // make it start    
            style={styles.backgroundVideo}  // any style you want
            repeat={true}                   // make it a loop
        /> */}
              <Image 
       source={item.VideoUrl}
       resizeMode="cover"
//        style={{
//            width: 150,
//            height: 150,
//  }}
  />
      {/* <Text style={styles.header}>{item.title}</Text> */}
    </View>)
}
const FrontPage = ({navigation}) => {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)

const login =async()=>{
  const userId = await AsyncStorage.getItem('userId');
  const userKey = await AsyncStorage.getItem('userKey');
  const userToken= await AsyncStorage.getItem('userToken');
  console.log("userId",userId);
  console.log("userKey",userKey);
  console.log("userToken",userToken);
  if(userToken && userKey && userId){
    console.log("userId",userId);
    console.log("userKey",userKey);
    console.log("userToken",userToken);
    navigation.navigate('Tabs');
   }
}

useEffect(() => {
  login();
}, [])
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
  <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SIZES.width-50}
        itemWidth={Math.round(SIZES.width * 0.7)}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        style={styles.video}
      />
   
  </View>
  <View style={{width:"50%",justifyContent:"space-evenly",alignItems:"center",flexDirection:"row"}}>
   <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 50,
          marginHorizontal: 0,
          backgroundColor: '#93c4ef'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
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
                    navigation.navigate('Register',"register");
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
                    navigation.navigate('Login');
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
        overflow:"hidden",
        zIndex:2,
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:COLORS.secondary
    }
})