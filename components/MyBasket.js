import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox} from "../constants/index"
const MyBasket = () => {
    return (
        <View style={Header}>
            <ScrollView>
        <View style={[CardBox,styles.CardBoxStyle]}>
        <View style={styles.IdolContainer}>
            <View style={styles.headTitle}>
                <Text style={FONTS.textstyle}>Basket 1</Text>
                <Text style={FONTS.textstyle}>Icon</Text>
            </View>
            <View style={[styles.AlignText,{padding:10 ,borderBottomWidth :2,borderBottomColor: "#383945"}]}>
                <Text style={[FONTS.textstyle, {right:20}]}>LS</Text>
                <Text style={[FONTS.textstyle,{right:20}]}>FS</Text>
            </View>
            <View style={[styles.AlignText,{flex:1}]}>
                <Text style={FONTS.textstyle}>Cipla</Text>
                <Text style={FONTS.textstyle}>Hero MotoCorp</Text>
            </View>
            
        </View>
    </View>
    <View style={[CardBox,styles.CardBoxStyle]}>
        <View style={styles.IdolContainer}>
            <View style={styles.headTitle}>
                <Text style={FONTS.textstyle}>Basket 1</Text>
                <Text style={FONTS.textstyle}>Icon</Text>
            </View>
            <View style={[styles.AlignText,{padding:10 ,borderBottomWidth :2,borderBottomColor: "#383945"}]}>
                <Text style={[FONTS.textstyle, {right:20}]}>LS</Text>
                <Text style={[FONTS.textstyle,{right:20}]}>FS</Text>
            </View>
            <View style={[styles.AlignText,{flex:1}]}>
                <Text style={FONTS.textstyle}>Cipla</Text>
                <Text style={FONTS.textstyle}>Hero MotoCorp</Text>
            </View>
            
        </View>
    </View>
    <View style={[CardBox,styles.CardBoxStyle]}>
        <View style={styles.IdolContainer}>
            <View style={styles.headTitle}>
                <Text style={FONTS.textstyle}>Basket 1</Text>
                <Text style={FONTS.textstyle}>Icon</Text>
            </View>
            <View style={[styles.AlignText,{padding:10 ,borderBottomWidth :2,borderBottomColor: "#383945"}]}>
                <Text style={[FONTS.textstyle, {right:20}]}>LS</Text>
                <Text style={[FONTS.textstyle,{right:20}]}>FS</Text>
            </View>
            <View style={[styles.AlignText,{flex:1}]}>
                <Text style={FONTS.textstyle}>Cipla</Text>
                <Text style={FONTS.textstyle}>Hero MotoCorp</Text>
            </View>
            
        </View>
    </View>
    <View style={[CardBox,styles.CardBoxStyle]}>
        <View style={styles.IdolContainer}>
            <View style={styles.headTitle}>
                <Text style={FONTS.textstyle}>Basket 1</Text>
                <Text style={FONTS.textstyle}>Icon</Text>
            </View>
            <View style={[styles.AlignText,{padding:10 ,borderBottomWidth :2,borderBottomColor: "#383945"}]}>
                <Text style={[FONTS.textstyle, {right:20}]}>LS</Text>
                <Text style={[FONTS.textstyle,{right:20}]}>FS</Text>
            </View>
            <View style={[styles.AlignText,{flex:1}]}>
                <Text style={FONTS.textstyle}>Cipla</Text>
                <Text style={FONTS.textstyle}>Hero MotoCorp</Text>
            </View>
            
        </View>
    </View>
    <View style={[CardBox,styles.CardBoxStyle]}>
        <View style={styles.IdolContainer}>
            <View style={styles.headTitle}>
                <Text style={FONTS.textstyle}>Basket 1</Text>
                <Text style={FONTS.textstyle}>Icon</Text>
            </View>
            <View style={[styles.AlignText,{padding:10 ,borderBottomWidth :2,borderBottomColor: "#383945"}]}>
                <Text style={[FONTS.textstyle, {right:20}]}>LS</Text>
                <Text style={[FONTS.textstyle,{right:20}]}>FS</Text>
            </View>
            <View style={[styles.AlignText,{flex:1}]}>
                <Text style={FONTS.textstyle}>Cipla</Text>
                <Text style={FONTS.textstyle}>Hero MotoCorp</Text>
            </View>
            
        </View>
    </View>
    </ScrollView>
    </View>
    )
}

export default MyBasket

const styles = StyleSheet.create({

    
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
    CardBoxStyle:{ 
    backgroundColor:COLORS.primary,
     elevation: 5 ,
     justifyContent:"flex-start",
      borderRadius: 10,
       overflow: "hidden",
    
       
},
    RowDiv:{
        justifyContent: "space-between", 
        flexDirection: "row",
         padding: "2%",
         backgroundColor:"red"
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
        }
})
