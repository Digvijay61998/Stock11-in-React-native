import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons } from '../../../constants';


const MyStock11 = ({navigation}) => {
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
           top:-130
 }}
  />
  <Text style={[FONTS.textstyle,{top:-50,width:100 ,height:20 ,textAlign:"center",color:"white"}]}>MY STOCK11</Text>

  <View style={styles.ProfileBox}>
      <View style={{top:-25}}>
    <View >
    <TouchableOpacity style={{paddingBottom:20,}}
          onPress={() =>
            navigation.navigate('WinningHistory')
          }
      >
        <View style={{width:250, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:15 ,marginBottom:15,elevation:13 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:20}}>Winning History</Text>
      </View>
      </TouchableOpacity>
    </View>

    <View>
    <TouchableOpacity style={{paddingBottom:20}}
          onPress={() =>
            navigation.navigate('Transactions')
          }
      >
        <View style={{width:250, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:15 ,marginBottom:15,elevation:13 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:20}}>Transactions</Text>
      </View>
      </TouchableOpacity>
    </View>

    <View>
    <TouchableOpacity style={{paddingBottom:20}}
          onPress={() =>
            navigation.navigate('MyProfile')
          }
      >
        <View style={{width:250, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:15 ,marginBottom:15,elevation:13 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:20}}>My performance.</Text>
      </View>
      </TouchableOpacity>
    </View>
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
        height:400,
        top:5,
        width:"85%",
        backgroundColor:"#f7edf0",
        borderRadius:35,
        alignItems:"center",
        justifyContent:"center",
        elevation:10,
          },
});


export default MyStock11;