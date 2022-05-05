import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList,Image } from 'react-native'
import { COLORS, FONTS, icons, Header, CardBox, IdolContest, dummyData, container} from "../../constants"
import React,{useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient'
import routes from '../../../utils/routes';


const AboutUs = ({ navigation }) => {

const[aboutUs ,setAboutUs] =useState()

  const GetAboutUs = async () => {
    try {
        const parsedResponse = await routes.STOCK_11.APIS.GET_ABOUT_US();
        console.log("parsedResponse=====",parsedResponse)
        setAboutUs(parsedResponse)
        } catch (error) {
        console.log("FAIL=====")
        console.error(error);
    }
    }

    useEffect(() => {
      GetAboutUs();
   },[])
  return (
    <LinearGradient 
    colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >

<View style={{flexDirection:"row",justifyContent:"space-between",top:-50,alignItems:"center"}}>
      
      <View>
       <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 80,
           height: 80,
          
 }}
  />
  </View>
  </View>
  <View style={{top:-80}}>
  <Text style={{top:50,color:"white",fontWeight:"bold",fontSize:15}}>ABOUT US</Text>

  </View>

    <View style={styles.aboutUsBox}>
      <View style={{width:"76%",height:160,marginTop:20}}>
        <View style={{alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"black",fontSize:10}}>
         {aboutUs.desc}
          </Text>
        </View>
       
      </View>
      <View style={{borderBottomWidth:1,borderTopWidth:1,height:120,width:"75%",borderColor:"grey",marginTop:30,justifyContent:'center',alignItems:"center"}}>
          <Text style={{color:"black",fontWeight:"500"}}>{aboutUs.title}</Text>
      </View>
      </View>
  </LinearGradient>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"column",

},
  aboutUsBox :{
  height:400,
        width:370,
        backgroundColor:"#ededed",
        borderRadius:25,
        alignItems:"center",
        marginBottom:80,
        justifyContent:"center",
        elevation:10,
        border:'1px solid #E8E4E4',
        boxShadow:"0px 20px 10px #00000014"
        },
});
