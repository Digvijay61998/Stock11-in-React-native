import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image,FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'
import { FONTS, icons ,SIZES,dummyData} from '../../../constants';

let url = [['#9679df', '#ba9bdf', '#ccbae3','#f2c2cf'], [ "#b9c4b5",'#d2d7c6',"#cfd5c4","#d3d7c6","#f5f0dc","#f5f0dc"], ['#eabcdf', '#e7d4e4','#e5e5e8','#e3f6ec' ]];

const WinningHistory = () => {
  const LivePriceEvents = dummyData.LivePricePool

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
  <Text style={[FONTS.textstyle,{top:50,height:20 ,textAlign:"center",color:"white"}]}>Winning History</Text>

    <View style={styles.ProfileBox}>
      <ScrollView style={styles.scroller}>
      <FlatList
      
          data={LivePriceEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
      <View style={{paddingTop:50,justifyContent:"center",alignItems:"center"}}>
      <View style={{width:SIZES.width-150,height:140,borderRadius:12,elevation:20}}>

        <LinearGradient
          // colors={['#9679df', '#ba9bdf', '#ccbae3','#f2c2cf', ]}
          colors={url[index % url.length]}

         
          style={{width:SIZES.width-140,height:140,borderRadius:12,elevation:20}}
          start={{ x: 0, y:1}}
          end={{ x: 1, y: 0}}
        >
          <View style={{padding:10}}>
          <Text style={{color:"purple",fontWeight:"800"}}>NIFTY FIFTY</Text>

          </View>

          <View style={{alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:25,fontWeight:"bold",color:"black"}}>WON Rs.10,000/-</Text>
          </View>
          <View style={{paddingTop:20,paddingLeft:10}}>
            <Text style={{fontWeight:"bold"}}>
              Entery FEE: Rs.10,000/-
            </Text>
            <Text style={{fontSize:12,fontWeight:"bold"}}>
              3rd Oct 2022
            </Text>
          </View>
        </LinearGradient>
      </View>
      </View>
          )}
          keyExtractor={(item, index) => index}
        />
        </ScrollView>
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
        width:SIZES.width-30,
        backgroundColor:"#f7edf0",
        borderRadius:35,
        alignItems:"center",
        justifyContent:"flex-start",
        elevation:10,
        display:"flex",

          },
          scroller: {
            flex: 5,
            width:"100%",
            
          },
})

export default WinningHistory;