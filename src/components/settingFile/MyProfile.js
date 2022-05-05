import React,{useEffect, useState} from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import routes from '../../../utils/routes';
import { COLORS, FONTS, icons} from '../../constants';


const MyProfile = ({navigation}) =>{
  const [profile ,setProfile]=useState()
  // GET API CALLED =====
  const getUserProfile = async () => {
    const userKey = await AsyncStorage.getItem('userKey');
     console.log("userId",userKey);
  try {
      const parsedResponse = await routes.STOCK_11.APIS.GET_USER_PROFILE(`${userKey}`);
      console.log("getUserProfileeee======>",parsedResponse);
      setProfile(parsedResponse)
      } catch (error) {
      console.log("FAIL=====")
      console.error(error);
  }
  }

  useEffect(() => {
    getUserProfile();
  }, [])

    return(
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
           marginTop:-60
 }}
  />
  <Text style={[FONTS.textstyle,{ marginBottom:50 ,width:100 ,height:20 ,textAlign:"center",color:"white"}]}>MY PROFILE</Text>
            <View style={styles.ProfileBox}>
            <View>
            <View style={{justifyContent:"center",alignItems: "center"}}>
            <View style={{width:50, height:50 ,borderRadius:50 ,top:80,zIndex:1,alignItems: "center", justifyContent:"center"}}>
          <View style={{width:110, height:90, borderRadius:50 ,justifyContent:"center",alignItems: "center"}}>
          <Image
                  source={icons.Profile}
                    resizeMode="contain"
                      style={{
                            width:70,
                             height:70,
                             top:-15
                              // tintColor: focused ? COLORS.
                              //     ActiveButton : COLORS.black
                                    }}/>

                  </View>
                      </View>
                      </View>
                      </View>
                      {profile ?<View style={{justifyContent:"space-around",alignItem:"center",flexDirection:"column",top:150,position:"relative"}}>
                        <Text style={{color:"black",paddingBottom:15,fontFamily:"Roboto-Bold"}}>Name : {profile.userKey}</Text>
                        <Text style={{color:"black",paddingBottom:15,fontFamily:"Roboto-Bold",right:14}}>Email : dano@dino.com</Text>
                        <Text style={{ color:"black",fontFamily:"Roboto-Bold"}}>Mobile : {profile.mobile}</Text>
                    </View>:<></>}
            <View style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",top:80}}>
     <View style={{width: '100%', height:250 ,top:55, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={[FONTS.button,{height:35,borderRadius:15,width:180}]} 
       title='Submit'
       onPress={() =>
        navigation.navigate('EditProfile')
      } 
       >
        <Text style={{color:"white",fontSize:14}}>EDIT PROFILE</Text>
       </TouchableOpacity>
             </View>

             <View style={{width: '100%', height:250 ,top:-150, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={[FONTS.button,{height:35,borderRadius:15,backgroundColor:"#11bab5",width:180}]}   
       title='Submit'
       onPress={() =>
        navigation.navigate('ChangePassword')
      } 
       >
        <Text style={{color:"white",fontSize:13}}>CHANGE PASSWORD</Text>
       </TouchableOpacity>
       </View>
             </View>

             </View>
        
      </LinearGradient>
    )}

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: "#1F1D2B",
            alignItems:"center",
            justifyContent:"space-evenly",
            flexDirection:"column",
    
        },
        ProfileBox:{
            height:450,
            top:-50,
            width:"85%",
            backgroundColor:"#f7edf0",
            borderRadius:25,
            alignItems:"center",
            justifyContent:"center",
            elevation:10,
              },
       
    
      
          
    })

    export default MyProfile;