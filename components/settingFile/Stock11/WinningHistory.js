import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { FONTS, icons } from '../../../constants';


const WinningHistory = () => {
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
           top:15
 }}
  />
  <Text style={[FONTS.textstyle,{top:50,width:200 ,height:20 ,textAlign:"center",color:"white"}]}>Winning History</Text>

    <View style={styles.ProfileBox}>
      <View style={{paddingTop:50}}>
      <View style={{backgroundColor:"red",width:245,height:140,borderRadius:12,elevation:20}}>

    </View>
      </View>

      <View style={{paddingTop:50}}>
      <View style={{backgroundColor:"red",width:245,height:140,borderRadius:12,elevation:20}}>

    </View>
      </View>

      {/* <View style={{paddingTop:50}}>
      <View style={{backgroundColor:"red",width:245,height:140,borderRadius:12,elevation:20}}>

    </View>
      </View> */}
      <View style={{paddingTop:50}}>
        <LinearGradient
          colors={['#e2dcf5', '#e2dcf5', '#4418d6' ]}
          style={{width:245,height:140}}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text>Vertical Gradient</Text>
        </LinearGradient>
      </View>

  </View>
      </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    ProfileBox:{
        height:700,
        top:70,
        width:"89%",
        backgroundColor:"#f7edf0",
        borderRadius:35,
        alignItems:"center",
        justifyContent:"flex-start",
        elevation:10,
        display:"flex",

          }
})

export default WinningHistory;