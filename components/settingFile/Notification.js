import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList,Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container, images} from "../../constants"
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'


const Notification = () => {
  return ( 
    <LinearGradient 
    colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}>
      {/* <View style={{height:600}}> */}
      <View style={{flexDirection:"row",justifyContent:"space-between",top:250,alignItems:"center"}}>
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
   <View style={{bottom:550,alignItems:"center",position:"absolute"}}>
     <Text style={[FONTS.textstyle,{color:"white" ,fontSize:20}]}>NOTIFICATIONS</Text>
   </View>

   <View style={styles.notificationContainer}>
<View style={{width:"70%"}}>
     <View style={{borderBottomWidth:0.3,bottom:200,flexDirection:"column",position:"absolute"}}>
<Text style={{marginBottom:60,color:"black"}}>Theis goin to end soon contest you are  following  </Text>
<Text style={{bottom:30,fontWeight:"bold",color:"black",textDecorationLine:"underline"}}> CHECK NOW</Text>
     </View>
     
     </View>
   </View>
   {/* </View> */}
  </LinearGradient>

  );
};

export default Notification;

const styles = StyleSheet.create({
  container:{
    flex:1,
    
    backgroundColor: "#ededed",
    alignItems:"center",
    justifyContent:"center"
},
notificationContainer:{
  height:700,width:350,backgroundColor:"white",borderRadius:25,
  marginTop:450,
        alignItems:"center",
        justifyContent:"center",
        elevation:15,

        border:'1px solid #E8E4E4',
        boxShadow:"0px 20px 10px #00000014",
}
});
