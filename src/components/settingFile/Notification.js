import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList,Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container,SIZES} from "../../constants"
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'


const Notification = () => {
  return ( 
    <LinearGradient 
    colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}>
      <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 70,
           height: 70,
           marginBottom:100,
 }}
  />
  <Text style={{color:"white",fontWeight:"bold"}}>NOTIFICATIONS</Text>
  <Text style={{color:"white",fontSize:12,marginLeft:200}}>20 unread messages</Text>
<View style={{width:SIZES.width-50,height:SIZES.height-250,borderRadius:20,backgroundColor:"#fcf6ff",alignItems:"flex-start",justifyContent:"flex-start",padding:30}}>
<ScrollView>
<View style={{borderBottomColor:"#e2dee2",borderBottomWidth:1,paddingBottom:40,paddingTop:20}}>
<Text style={{color:"black"}}>THE contest you are Foloowing Is going to end soon</Text>
<Text style={{color:"black",fontWeight:"bold",top:10, textDecorationLine: 'underline'}}>CHECK NOW</Text>
</View>
<View style={{borderBottomColor:"#e2dee2",borderBottomWidth:1,paddingBottom:40,paddingTop:20}}>
<Text style={{color:"#a7a2a7",}}>THE contest you are Foloowing Is going to end soon</Text>
<Text style={{color:"#a7a2a7",fontWeight:"bold",top:10, textDecorationLine: 'underline'}}>CHECK NOW</Text>
</View>
<View style={{borderBottomColor:"#e2dee2",borderBottomWidth:1,paddingBottom:40,paddingTop:20}}>
<Text style={{color:"black",}}>THE contest you are Foloowing Is going to end soon</Text>
<Text style={{color:"black",fontWeight:"bold",top:10, textDecorationLine: 'underline'}}>CHECK NOW</Text>
</View>
<View style={{borderBottomColor:"#e2dee2",borderBottomWidth:1,paddingBottom:40,paddingTop:20}}>
<Text style={{color:"#a7a2a7",}}>THE contest you are Foloowing Is going to end soon THE contest you are Foloowing Is going to end soon THE contest you are Foloowing Is going to end soon THE contest you are Foloowing Is going to end soon</Text>
<Text style={{color:"#a7a2a7",fontWeight:"bold",top:10, textDecorationLine: 'underline'}}>CHECK NOW</Text>
</View>
<View style={{borderBottomColor:"#e2dee2",borderBottomWidth:1,paddingBottom:40,paddingTop:20}}>
<Text style={{color:"black"}}>THE contest you are Foloowing Is going to end soon</Text>
<Text style={{color:"black",fontWeight:"bold",top:10, textDecorationLine: 'underline'}}>CHECK NOW</Text>
</View>
</ScrollView>
</View>
  </LinearGradient>

  );
};

export default Notification;

const styles = StyleSheet.create({
  container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:COLORS.secondary,
},
notificationContainer:{
 
}
});
