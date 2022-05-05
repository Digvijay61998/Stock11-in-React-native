import { StyleSheet,View, Text, TouchableOpacity, ScrollView,Button,Image} from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData, images} from "../src/constants"
import LinearGradient from 'react-native-linear-gradient'


const Setting = ({ navigation}) => {
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
           width: 80,
           height: 80,
           marginTop:2
          
 }}
  />

<Image
                  source={icons.Profile}
                    resizeMode="contain"
                      style={{
                            width:"20%",
                             height:"20%",
                             marginTop:-25

                              // tintColor: focused ? COLORS.
                              //     ActiveButton : COLORS.black
                                    }}/>
    <View >
      <View style={styles.settingContainer}>
<TouchableOpacity style={{paddingBottom:9}}
          onPress={() =>
            navigation.navigate('MyProfile')
          }
      >
        <View style={{width:270, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:13 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>My Profile</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingBottom:9}}
          onPress={() =>
            navigation.navigate('MyStock11')
          }
      >
      <View style={{width:270, height:42 ,backgroundColor:COLORS.primary ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15,elevation:13}}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>My Stock 11</Text>
      
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingBottom:9}}
          onPress={() =>
            navigation.navigate('HowToPlay')
          }
      >

<View style={{width:270, height:42 ,backgroundColor:COLORS.primary , justifyContent: 'center' ,borderRadius:10 ,marginBottom:15,elevation:13}}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>How to Play</Text>
      </View>
      </TouchableOpacity>
     
      <TouchableOpacity style={{paddingBottom:9}}
          onPress={() =>
            navigation.navigate('ReferFriend')
          }
      >
      <View style={{width:270, height:42 ,backgroundColor:COLORS.primary ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15,elevation:13}}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Referals</Text>
      </View>
      </TouchableOpacity>
     
      <TouchableOpacity style={{paddingBottom:9}}
          onPress={() =>
            navigation.navigate('AboutUs')
          }
      >
      <View style={{width:270, height:42 ,backgroundColor:COLORS.primary ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15,elevation:13}}>
      <Text style={{color:"black",fontSize:15,paddingLeft:10}}>About Us</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingBottom:9}}
          onPress={() =>
            navigation.navigate('HelpDesk')
          }
      >
      <View style={{width:270, height:42 ,backgroundColor:COLORS.primary ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15,elevation:13}}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Help Desk</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingBottom:9}}
          onPress={() =>
            navigation.navigate('FrontPage')
          }
      >
      <View style={{width:270, height:42 ,backgroundColor:COLORS.primary ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15,elevation:13}}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Logout</Text>
      </View>
      </TouchableOpacity>
      
      </View>
    </View>
    </LinearGradient>
  );
};

export default Setting;

const styles = StyleSheet.create({

    container:{
        flex:1,
        
        backgroundColor: "#ededed",
        alignItems:"center",
        justifyContent:"center"
    },
    settingContainer:{
      height:500,width:350,           
       backgroundColor:COLORS.lightPink,
      borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        elevation:15,
        border:'1px solid #E8E4E4',
        boxShadow:"0px 20px 10px #00000014",
        marginBottom:25
    }
});
