import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, icons ,Header ,CardBox} from "../../constants/index"
import React ,{useState,useEffect} from 'react';

const Basket = ({data}) => {

    const [basketDetails, setBasketDetails] = useState([]);

useEffect(() => {
    if(data === undefined){
        setBasketDetails("")
    }else{
        setBasketDetails(data)
    }
  });
  return (
     <View style={[CardBox,styles.CardBoxStyle]}>
        <View style={styles.IdolContainer}>
            <View style={styles.headTitle}>
                <Text style={FONTS.textstyle}>Basket 1</Text>
                {/* <Text style={FONTS.textstyle}>Icon</Text> */}
                <View style={{ paddingLeft:20 }}>
                <Image 
                source={icons.editIcon}
                resizeMode="contain"
                style={{
                    width: 15,
                    height: 15,
                   
          }}
        />
            </View>
            </View>
            <View style={[styles.AlignText,{padding:10 ,borderBottomWidth :2,borderBottomColor: "#383945"}]}>
                <Text style={[FONTS.textstyle, {right:20}]}>{basketDetails.category1}</Text>
                <Text style={[FONTS.textstyle,{right:20}]}>{basketDetails.category2}</Text>
            </View>
            <View style={[styles.AlignText,{flex:1}]}>
                <Text style={FONTS.textstyle}>{basketDetails.company}</Text>
                <View style={{flexDirection:"row"}}>
                <Image 
                source={icons.groupTwo}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                   
          }}></Image>
          <View style={{paddingLeft:15}}>
                <Text style={FONTS.textstyle}>{basketDetails.stockName}</Text>
                </View>
            </View>
            </View>
        </View>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
    CardBoxStyle:{ 
        backgroundColor:COLORS.primary,
         elevation: 5 ,
          borderRadius: 10,
           overflow: "hidden",
    },
    IdolContainer: {
        position: "relative",
        width: 350,
        height: 140,
    },
    headTitle:{
        justifyContent: "space-between", 
        flexDirection: "row",
         padding: 6,
         backgroundColor:COLORS.HeaderBackground , 
         right: 5 , bottom:5,
         width: 360,
         borderBottomWidth :2,
         borderBottomColor: "#383945",
       },
       AlignText:{
        justifyContent: "space-around", 
         alignItems: "center",
         flexDirection: "row"
    },

});
