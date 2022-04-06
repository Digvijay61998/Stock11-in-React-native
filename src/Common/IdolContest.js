import { StyleSheet, Text, View ,Image} from 'react-native';
import React ,{useState,useEffect} from 'react';
import { COLORS, FONTS, icons ,Header ,CardBox} from "../constants/index"
import { TouchableOpacity } from 'react-native-gesture-handler';
const IdolContest = ({data}) => {

const [contestDetails, setContestDetails] = useState([]);

useEffect(() => {
    if(data === undefined){
        setContestDetails("")
    }else{
        setContestDetails(data)
    }
  });
  
  return (
    <View>
    <View style={styles.IdolContainer}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
            <Text style={{fontSize:19 ,color:"#032F81" ,fontWeight:"bold" ,fontFamily:"lato"}}>NIFTY FIFTY</Text>
            <View></View>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" ,marginTop:-10}}>
            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                <Text style={{ color: "black" , fontSize:23,fontWeight:"bold" }}>WIN Rs.10,000/-</Text>
                <Text style={{ color: "black" , fontSize:17,fontWeight:"bold"}}>ENTRY FEE: Rs.1000/-</Text>
                <Text style={{ color: "#45444" , fontSize:14,fontWeight:"bold"}}>{contestDetails.winners} Winners</Text>
           
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
          <View style={{alignItems:"center",right:46,top:8}}>
          <View style={{ width: 230, height: 5, backgroundColor:"#4caea7", borderRadius: 10 }}>
          </View>
          <View style={{ justifyContent: "space-between", flexDirection: "row", width:230}}>
            <Text style={[FONTS.textstyle ,{fontSize:8 }]}></Text>
            <Text  style={[FONTS.textstyle ,{fontSize:10,color:"red"}]}>No more Spots!</Text>
          </View>
          </View>
    </View>
    <View style={styles.TimeDate}>
    {contestDetails !== undefined ? <Text style={{ color: "black" ,borderRadius: 10,fontFamily: 'lato',}}>1st {contestDetails.date}</Text>:<></>}
 <Text style={[FONTS.textstyle,styles.view]}>VIEW</Text>
    </View>
</View>
  );
};

export default IdolContest;

const styles = StyleSheet.create({ 
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1F1D2B",
},
shadow: {
    shadowColor: "#252837",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
},

scroller: {
    flex: 1,
  overflow:"hidden",
},

TimeDate: {
    width: 325,
    height: 30,
    marginTop:4,
    paddingLeft:8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius: 5
},
IdolContainer: {
    position: "relative",
    width: 340,
    height: 140,
},
textstyle: {
    fontFamily: 'lato',
    color: "black",
    fontSize:16,
    fontWeight: 'bold',
},

// My Home menue
Mycontestmenu:{
    position: "relative",
    justifyContent:"space-around",
    flexDirection: "row",
    width: 380,
    height: 60,
    backgroundColor: "#252837",
},
ActiveMycontest:{
    flex: 1,
   width: 120,
   borderTopRightRadius: 15,
   borderTopLeftRadius: 15,
    backgroundColor: COLORS.ActiveButton, 
    margin:2,
},
MycontestText:{ 
top:18 ,
left:24,
color:"black",
fontFamily: 'lato',
fontSize:15,
fontWeight: 'bold',
},
view:{
    backgroundColor:COLORS.secondary,
    color:COLORS.white,
    fontFamily:"bold",
    fontSize:12,
    width:70,
    height:30,
    marginBottom:35,
    paddingTop:6,
    textAlign:"center",
    borderRadius:40
}

})

