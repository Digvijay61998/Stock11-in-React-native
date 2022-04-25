import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'
import { icons, FONTS, SIZES, dummyData } from '../../../constants';


let url = ['#9679df', '#ba9bdf', '#ccbae3','#f2c2cf'];


const Transactions = () => {

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
           top:-20
 }}
  />

<Text style={[FONTS.textstyle,{top:20,height:20 ,textAlign:"center",color:"white"}]}>Transactions</Text>


  <View style={styles.ProfileBox}>
  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:SIZES.width-105,alignItems:"flex-start",bottom:-40}}>
       <TouchableOpacity style={[FONTS.button,{height:30,borderRadius:16,backgroundColor:"#11bab5",width:90}]}   
       title='Submit'
        
       >
        <Text style={{color:"white",fontSize:13}}>Deposit</Text>
       </TouchableOpacity>

       <TouchableOpacity style={[FONTS.button,{height:30,borderRadius:16,backgroundColor:"#11bab5",width:90}]}   
       title='Submit'
       
       >
        <Text style={{color:"white",fontSize:13}}>Withdrawls</Text>
       </TouchableOpacity>
       </View>

    <View style={{width:"100%",paddingTop:50}}>
    <ScrollView style={styles.scroller}>
    <FlatList
     data={LivePriceEvents}
     keyExtractor={(item) => item.id}
     renderItem={({ item, index }) => (
 <View style={{paddingTop:50,justifyContent:"center",alignItems:"center"}}>
 <View style={{width:SIZES.width-150,borderRadius:12,elevation:20,borderColor:'white'}}>

   <LinearGradient
     colors={['#d6d2e5', '#e6e3ef', '#e6e3ef','#fefeff', ]}
    //  colors=url[index % url.length]

    
     style={{width:SIZES.width-130,height:120,borderRadius:12,elevation:15}}
     start={{ x: 0, y:1}}
     end={{ x: 1, y: 0}}
   >
     <View style={{paddingTop:5,display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
     <Text style={{paddingLeft:12,fontWeight:"700"}}>12/05/2022</Text>
     <View style={{alignItems:"flex-start",justifyContent:"center",paddingLeft:12}}>
       <Text style={{fontSize:20,fontWeight:"bold",color:"black",paddingTop:10}}>ADDED Rs.10,000/-</Text>
     </View>
     <View style={{paddingTop:8,paddingLeft:10}}>
       <Text style={{fontWeight:"bold"}}>
         UPI TRANSFER
       </Text>
       <Text style={{fontSize:12,fontWeight:"bold",paddingTop:6}}>
         DETAILS :
       </Text>
     </View>
     </View>

     
   </LinearGradient>
 </View>
 </View>
     )}
     keyExtractor={(item, index) => index}
    />
    </ScrollView>

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
        height:610,
        top:55,
        width:"93%",
        backgroundColor:"#f7edf0",
        borderRadius:35,
        alignItems:"center",
        justifyContent:"center",
        elevation:10,

          },
    scroll:{
        width:"100%",
        overflow:"scroll",

    }
})

export default Transactions;