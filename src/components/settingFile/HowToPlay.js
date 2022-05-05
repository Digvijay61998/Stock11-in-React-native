import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList, Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container} from "../../constants"
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import FollowingContest from '../Contest/FollowingContest/FollowingContest';
import routes from '../../../utils/routes';


const HowToPlay = () => {

  const [visible, setVisible] = useState()
  const [getplay, setGetPlay] = useState()

  const handlePress =(e) =>{
    console.log("e",e);
    // const handleEvent = e.target._internalFiberInstanceHandleDEV.pendingProps.children
    setVisible(e)
  }

    //Get api called
    const getHowPlay = async () => {
      try {
          const parsedResponse = await routes.STOCK_11.APIS.GET_HOW_TO_PLAY();
          console.log("parsedResponse=====",parsedResponse["Select a Contest"].selectContestAbout)
          setGetPlay(parsedResponse)
          } catch (error) {
          console.log("FAIL=====")
          console.error(error);
      }
      } 
      useEffect(() => {
        getHowPlay()
      }, [])
  return (
    <LinearGradient 
    colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
<View style={{flexDirection:"row",justifyContent:"space-between",top:-80,alignItems:"center"}}>
      <View >
      <Image
                  source={icons.Profile}
                    resizeMode="contain"
                      style={{
                            width:50,
                             height:50,

                                    }}/>
      </View>
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
  <View style={{top:-90}}>
  <Text style={{top:50,color:"white",fontWeight:"bold",fontSize:15}}>ABOUT US</Text>

  </View>

    <View style={styles.playBox}>
      <View style={{paddingTop:25}}>
    <TouchableOpacity  
          onPress={(e) =>handlePress("Introduction")
            
          }
      >
        <View key={1} id="Introduction" style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Introduction</Text>
      </View>
      </TouchableOpacity>

{visible === "Introduction" ? <View >
  <Text>{getplay.Introduction.introAbout}</Text>
</View>:<></>}
      <TouchableOpacity 
          onPress={() =>
            handlePress("SelectContest")
          }
      >
        <View style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Select a Contest</Text>
      </View>
      </TouchableOpacity>
      {visible === "SelectContest" ? <View >
  <Text>{getplay["Select a Contest"].selectContestAbout}</Text>
</View>:<></>}
      <TouchableOpacity 
          onPress={() =>
            handlePress("CreatePortfolio")
          }
      >
        <View style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Create a Portfolio</Text>
      </View>
      </TouchableOpacity>
      {visible === "CreatePortfolio" ? <View >
  <Text>{getplay["Create Portfolio"].createPortfolioAbout}</Text>
</View>:<></>}
      <TouchableOpacity 
          onPress={() =>
            handlePress("JoinContest")
          }
      >
        <View style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Join a Contest</Text>
      </View>
      </TouchableOpacity>
      {visible === "JoinContest" ? <View >
      <Text>{getplay["Join a Contest"].joinContestVideo}</Text>
</View>:<></>}
      <TouchableOpacity 
          onPress={() =>
            handlePress("Followcontest")
          }
      >
        <View style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Follow a contest</Text>
      </View>
      </TouchableOpacity>
      {visible === "Followcontest" ? <View >
  <Text>{getplay.Introduction.introAbout}</Text>
</View>:<></>}
      </View>
      
    </View>

  </LinearGradient>
  );
};

export default HowToPlay;

const styles = StyleSheet.create({
  input:{
    width: '90%',
    backgroundColor: COLORS.primary,
    borderRadius:10,
    height: 50,
    margin:10,paddingLeft:15,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
    overflow:"hidden"
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"column",

},
playBox :{
  minHeight:600,
        width:350,
        backgroundColor:"#ededed",
        borderRadius:10,
        alignItems:"center",
        marginBottom:-250,
        justifyContent:"flex-start",
        elevation:10,
        border:'1px solid #E8E4E4',
        boxShadow:"0px 20px 10px #00000014"
        },

  openMenu:{
    width:50 , 
    backgroundColor:COLORS.ActiveButton,
    height:50}
});
