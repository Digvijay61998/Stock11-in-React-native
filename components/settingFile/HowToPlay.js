import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList, Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container, images} from "../../constants"
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import FollowingContest from '../Contest/FollowingContest/FollowingContest';


const HowToPlay = () => {

  const [visible, setVisible] = useState()

  const Introduction =(e) =>{
    const handleEvent = e.target._internalFiberInstanceHandleDEV.pendingProps.children
    setVisible(handleEvent)
  }

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
                  source={images.profile}
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
          onPress={(e) =>Introduction(e)
            
          }
      >
        <View key={1} id="Introduction" style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Introduction</Text>
      </View>
      </TouchableOpacity>

{visible === "Introduction" ? <View >
  <Text>jhiuiouoiuiouoiuoiuoi</Text>
</View>:<></>}
      <TouchableOpacity 
          onPress={() =>
            Contest()
          }
      >
        <View style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Select a Contest</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() =>
            Portfolio()
          }
      >
        <View style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Create a Portfolio</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() =>
            JoinContest()
          }
      >
        <View style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Join a Contest</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() =>
           FollowingContest()
          }
      >
        <View style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:10 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Follow a contest</Text>
      </View>
      </TouchableOpacity>
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
