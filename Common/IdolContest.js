import { StyleSheet, Text, View } from 'react-native';
import React ,{useState,useEffect} from 'react';
import { COLORS, FONTS, icons ,Header ,CardBox} from "../constants/index"
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
    <View style={CardBox}>
    <View style={styles.IdolContainer}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
            <Text style={styles.textstyle}>Idol Contest</Text>
            <Text style={styles.textstyle}>Entry</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                <Text style={{ color: "white" , fontSize:10 , }}>prize pool</Text>
                <Text style={styles.textstyle}>Rs. {contestDetails.pricePool}</Text>
            </View>
            <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"orange",fontWeight:"bold"}}>{contestDetails.duration}</Text>
            <Text style={styles.textstyle}>{contestDetails.winners} Winners</Text>
            </View>
           


            <Text style={{ color: "black", backgroundColor:COLORS.ActiveButton, padding:6 ,borderRadius:10 , fontWeight: 'bold',}}>Rs. {contestDetails.entryFees}</Text>
        </View>
          <View style={{alignItems:"center",top:15}}>
          <View style={{ width: 180, height: 5, backgroundColor: COLORS.ActiveButton, borderRadius: 10 }}>
          </View>
          <View style={{ justifyContent: "space-between", flexDirection: "row", width:170}}>
            <Text style={[FONTS.textstyle ,{fontSize:8 }]}>3 Spots Left</Text>
            <Text  style={[FONTS.textstyle ,{fontSize:8}]}>3 Spots</Text>
          </View>
          </View>
    </View>
    <View style={styles.TimeDate}>
    {contestDetails !== undefined ? <Text style={{ color: "white" ,borderRadius: 10  , fontFamily: 'Poppins',}}>st{contestDetails.date}</Text>:<></>}
    </View>
</View>
  );
};

export default IdolContest;

const styles = StyleSheet.create({ container: {
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
    width: 350,
    height: 30,
    backgroundColor: "#252837",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
},
IdolContainer: {
    position: "relative",
    width: 350,
    height: 140,
},
textstyle: {
    fontFamily: 'Poppins',
    color: "white",
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
fontFamily: 'Poppins',
fontSize:15,
fontWeight: 'bold',
}
})

