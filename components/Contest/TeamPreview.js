import {  StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, FlatList,ImageBackground} from 'react-native'
import { COLORS, FONTS, icons, Header, images, CardBox, dummyData,SIZES} from "../../constants"
import React, { useState, useEffect }  from 'react';
import LinearGradient from 'react-native-linear-gradient'


const TeamPreview = ({ navigation, route }) => {
    const editTeams = dummyData.BasketData
    const [editTeam, setEditTeam] = useState(dummyData.BasketData || []);
    const [points, setPoints] = useState([])
    const [counter, setCounter] = useState([])
  
    const increment = (item,index) =>{
      console.log("item{",item);
      console.log("ind",index)
      
     
      const stock = editTeam[index]
      console.log("stock",stock);
      if(stock.count){h
      stock.count = stock.count? stock.count + 1 : 1;
      editTeam[index]=stock;
    setEditTeam([...editTeam]);
      }
      }
    
  
    const decrement = (item,index) =>{
      const stock = editTeam[index]
      stock.count = stock.count? stock.count - 1 : 1;
      editTeam[index]=stock;
    setEditTeam([...editTeam]);
    }
  
  
    // useEffect(() => {
    //   setEditTeam(editTeams.map(i=>{
    //     i["count"] = 0;
    //     return i;
    //   }))
    // },[]);
  
    const selectpoint = (item, index) => {
      if (points.includes(item.id)) {
        const newPoint = points.filter((itemId) =>
          itemId !== item.id);
        return setPoints(newPoint)
      }
      else if (points.length < 10) {
        setPoints([...points, item.id], index);
      }
      else {
        console.log("only 10 points can be selected");
      }
    }
  

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
        <ImageBackground
            resizeMode="cover"
            source={icons.card}
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
                <TouchableOpacity style={{ width:20,height:20,
                     justifyContent:"center",alignItems:"center"}}
                  onPress={() =>decrement (item,index)}
                  >
                <Text style={{fontSize:14,fontWeight:"bold",color:"black"}}>-</Text>
                </TouchableOpacity>
                </View>
                <View>
            <Text style={[FONTS.textstyle,{fontSize:15,backgroundColor:"#fff" ,padding:1 ,paddingLeft:10,paddingRight:10 ,borderRadius:5}]}>
            {item.count ? item.count : 0}
              </Text>
                </View>
                <View style={{paddingLeft:3}}>
                <TouchableOpacity style={{ width:15,height:15,
           justifyContent:"center",alignItems:"center"}}
                  onPress={() =>increment (item,index)} >
                <Text style={{fontSize:14,fontWeight:"bold" ,color:"black",bottom:2}}>+</Text>
                </TouchableOpacity>
              
                </View>
              
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
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
        width: 360,
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
        height: 149,
        width: 285,
        // backgroundColor: "#1F1D2B",
        marginBottom:15,
        borderRadius: 10,
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
      }
    
});
