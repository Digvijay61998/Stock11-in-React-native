import {  StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, FlatList,ImageBackground} from 'react-native'
import { COLORS, FONTS, icons, Header,CardBox, dummyData,SIZES} from "../../constants"
import React, { useState, useEffect }  from 'react';
import LinearGradient from 'react-native-linear-gradient'


const TeamPreview = ({ navigation, route }) => {
    const editTeams = dummyData.BasketData
    const [editTeam, setEditTeam] = useState(dummyData.BasketData || []);

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
         marginBottom:30
}}
/>
<LinearGradient
  colors={['#f8f8f8', '#dddddd','#bfbfbf','#b7b7b7' ]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
            style={styles.contestContainer}
            >
    
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%"}}>
            <Text style={{fontSize:14 ,color:"#032F81" ,fontWeight:"bold" ,fontFamily:"lato"}}>BASKET NAME</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" ,marginTop:-10}}>
            <View style={{ justifyContent: "space-between", flexDirection: "column" ,height:80,top:15}}>
                <Text style={{ color: "black" , fontSize:17,fontWeight:"bold" }}>STOCK FESTIVAL</Text>
                <Text style={{ color: "black" , fontSize:12}}>Correspondant Contest - Nifty Fifty</Text>
                <Text style={{ color: "#45444" , fontSize:12,fontWeight:"bold"}}>1st OCT -3rd OCT 2022</Text>
           
            </View>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Image 
            source={icons.basket}
            resizeMode="contain"
            style={{
                width:40,
                height: 40,
                top:-40
      }}
            />
        </View>
        </View>
      </LinearGradient>
    <View style={styles.Teamcontainer}>
      <View style={styles.EarnListTitle}>
        <Text style={{fontWeight:"bold",color:"black",fontSize:18}}>PREVIEW BASKET:2</Text>
       <View style={[styles.headerTitle,{marginTop:20,borderBottomWidth:1,borderTopWidth:1,borderColor:"#e4e2e4"}]}>
         <Text style={{color:"black" ,fontWeight:"bold",fontSize:14}}>STOCKS</Text>
         <Text style={{color:"black" ,fontWeight:"bold",fontSize:14}}>WEIGHTAGE</Text>
      </View>
      </View>
      <ScrollView style={styles.scroller}>
        <FlatList
          data={editTeam}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.EarnList}
              onPress={() => selectpoint(item, index)} key={item.id}
            >
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"center" ,marginLeft:15}}>
                <Text style={[FONTS.textstyle,{fontSize:14}]}>{item.stocks}</Text>
              </View>
              <View style={{alignItems:"center",justifyContent:"space-around",display:"flex",flexDirection:'row' ,marginRight:15}}>
                <View style={{paddingRight:3}}>
                </View>
                <View>
            <Text style={[FONTS.textstyle,{fontSize:15,backgroundColor:"#fff" ,padding:1 ,paddingLeft:10,paddingRight:10 ,borderRadius:5}]}>
                0
              </Text>
                </View>
                <View style={{paddingLeft:3}}>
                </View>
              
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
      <View style={{width:SIZES.width-80,paddingBottom:80,justifyContent:"space-between",alignItems:"center",flexDirection:"row",top:50}}>
        <TouchableOpacity
              style={[FONTS.button,{backgroundColor:"#46a19a",width:120}]}
             onPress={() =>
              navigation.navigate('CreateContestBasket', {
              })
            }
        ><Text style={{color:"white",textAlign:"center"}}>EDIT</Text></TouchableOpacity>
          <TouchableOpacity
              style={[FONTS.button,{width:120}]}
             onPress={() =>
              navigation.navigate('MyBasket', {
              })
            }
        ><Text  style={{color:"white"}}>CONTINUE</Text></TouchableOpacity>
      </View>
    </View>
  </LinearGradient>
    );
};

export default TeamPreview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F1D2B",
        alignItems: "center",
        justifyContent: "center"
      },
      scroller: {
        flex: 1,
        overflow: "hidden",
        marginTop:30,
        paddingLeft:15,
        paddingRight:15
      },
      CardBasket: {
        backgroundColor: COLORS.HeaderBackground,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        marginTop: 15
      },
      Teamcontainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor:"#fcf4ff",
        marginTop: -80,
        borderRadius:20
      },
      EarnListTitle: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        width: SIZES.width-80,
        height: 50,
        marginTop:100,
      },
      EarnList: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width:SIZES.width-80,
        padding: 10,
        borderRadius:20,
        marginBottom:10,
        backgroundColor:"#e7f0f2"
      },
      contestContainer:{
        height: 130,
        width:SIZES.width-120,
        // backgroundColor: "#1F1D2B",
        marginBottom:15,
        borderRadius: 10,
        overflow:"hidden",
        padding: 5,
        elevation:3,
      },
      headerTitle:{
        width:300,
        height:35,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        paddingLeft:15,
        paddingRight:15
      },
      // button:{
      //   width:100 ,
      //   height:30,
      //   backgroundColor:COLORS.secondary,
      //   borderRadius:20,
      //   alignItems:"center",
      //   justifyContent:"center"
      // }

    
});
