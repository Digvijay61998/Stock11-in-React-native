import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList,Image,AsyncStorage} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container,SIZES} from "../../constants"
import React,{useEffect,useState} from 'react';
import LinearGradient from 'react-native-linear-gradient'
import routes from '../../../utils/routes';


const Notification = () => {

  const [notify , setNotify]=useState("dsk check")
  console.log(notify);

  const GetNotification = async () => {
    const userId = await AsyncStorage.getItem('userId');
    console.log("userId",userId);
    try {
        const parsedResponse = await routes.STOCK_11.APIS.GET_NOTIFICATION_KEY(`${userId}`);
        console.log("parsedResponse=====",parsedResponse)
        setNotify(parsedResponse)
        } catch (error) {
        console.log("FAIL=====")
        console.error(error);
    }
    }


    const getHandleRead = async (item) => {
      const data = item.notificationKey
      try {
          const parsedResponse = await routes.STOCK_11.APIS.GET_NOTIFICATION(`${data}`);
          console.log("parsedResponse=====",parsedResponse)
          setNotify(parsedResponse)
          GetNotification();
          } catch (error) {
          console.log("FAIL=====")
          console.error(error);
      }
      }

  useEffect(() => {
     GetNotification();
  }, [])

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
<FlatList
        // data={LiveEvents}
        data={notify}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
<ScrollView>
<View style={{borderBottomColor:"#e2dee2",borderBottomWidth:1,paddingBottom:40,paddingTop:20}}>
<Text style={item.readStatus === "NR" ? [styles.unread]:[styles.read]}>{item.message}</Text>
<TouchableOpacity 
style={{fontWeight:"bold",top:10, textDecorationLine: 'underline'}} 
onPress={() => getHandleRead(item)}
><Text>CHECK NOW</Text></TouchableOpacity>
</View>
</ScrollView>
        )}
        keyExtractor={(item, index) => index}
/>
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
unread:{
 color:"black"
},
read:{
  color:"#a7a2a7"
 }
});
