import React from 'react'
import { StyleSheet, Text, View ,ScrollView ,SafeAreaView ,TouchableOpacity,FlatList,ImageBackground,Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,dummyData} from "../../constants/index"
import {IdolContest} from "../../Common"
import LinearGradient from 'react-native-linear-gradient'

const MyBasket = ({ navigation }) => {
  let url = [icons.card, icons.card1, icons.card3];

   const data = dummyData.MybasketDetails
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
           width: 70,
           height:70,
          
 }}
  />
          <View style={styles.basketContainer}>
        <SafeAreaView style={Header}>
            <View style={styles.textHeader}><Text style={{fontSize:18,fontWeight:"bold",color:"black"}}>MY BASKET</Text><Image source={icons.addButton}/></View>
            <ScrollView styles={styles.scroller}>
            <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            // <TouchableOpacity
            //   onPress={() =>
            //     navigation.navigate('CompletedContestDetails')
            //   }
            // >
            <>
            <ImageBackground
            resizeMode="cover"
            source={url[index % url.length]}
            style={styles.contestContainer}
            >
    <View style={[styles.IdolContainer,{width:280}]}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%"}}>
            <Text style={{fontSize:14 ,color:"#032F81" ,fontWeight:"bold" ,fontFamily:"lato"}}>NIFTY FIFTY</Text>
            <View></View>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" ,marginTop:-10}}>
            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                <Text style={{ color: "black" , fontSize:17,fontWeight:"bold" }}>WIN Rs.10,000/-</Text>
                <Text style={{ color: "black" , fontSize:12}}>ENTRY FEE: Rs.1000/-</Text>
                <Text style={{ color: "#45444" , fontSize:14,fontWeight:"bold"}}>3 Winners</Text>
           
            </View>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Image 
            source={icons.IconUsers}
            resizeMode="contain"
            style={{
                width:30,
                height: 30,
      }}
            />
            <Text style={{ color:COLORS.secondary, padding:6 ,borderRadius:10 , fontWeight: 'bold',}}>12344</Text>
            <Text style={{ color:COLORS.secondary,borderRadius:10 , fontWeight: 'bold',fontSize:11}}>Bulls</Text>
        </View>
           
        </View>
          <View style={{alignItems:"center",right:44,top:4}}>
          <View style={{width: 180, height: 5, backgroundColor:"#4caea7", borderRadius: 10 }}>
          </View>
          <View style={{ justifyContent: "space-between", flexDirection: "row", width:230}}>
            <Text style={[FONTS.textstyle ,{fontSize:8 }]}></Text>
            <Text  style={[FONTS.textstyle ,{fontSize:10,color:"black"}]}>No more Spots!</Text>
          </View>
          </View>
    </View>
      </ImageBackground>
      <View style={{width:280, alignItems: "center", justifyContent:"space-between",marginBottom:25 ,flexDirection:"row"}}>
<Text>icon</Text>
       <TouchableOpacity style={FONTS.button}
           onPress={() =>
            navigation.navigate('CreateContestBasket')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"white"}]}>EDIT</Text>
       </TouchableOpacity>
       <TouchableOpacity 
          //  onPress={() =>
          // }
       >
        <Text>EDIT</Text>
       </TouchableOpacity>
    </View>
   </>
          //  </TouchableOpacity>
           
          )}
          keyExtractor={(item, index) => index}
        />
    </ScrollView>
  
    </SafeAreaView>
    </View>
    </LinearGradient>
    )
}

export default MyBasket

const styles = StyleSheet.create({
    Container: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:COLORS.secondary,
    
    scroller: {
        flex: 1,
      overflow:"hidden",
    },
    container:{
      flex:1,
      backgroundColor: "#1F1D2B",
      alignItems:"center",
      justifyContent:"space-evenly",
      flexDirection:"column",

  },
    TimeDate: {
        width: 350,
        height: 30,
        backgroundColor: "#252837",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    basketContainer:{
      width:"95%" ,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      backgroundColor:"white",
      top:100,
      borderRadius:20
    },
    contestContainer:{
      height: 151,
      width: 289,
      // backgroundColor: "#1F1D2B",
      marginBottom:15,
      borderRadius: 10,
      padding: 5,
      elevation:3,
    },
    textHeader:{
      width:200 ,
      height:70 ,
      justifyContent:"space-between",
      alignItems:"center",
      flexDirection:"row",
      marginLeft:70,
    },

})
