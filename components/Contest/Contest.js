import React , { useState ,useEffect} from 'react'
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,dummyData} from "../../constants"
import {IdolContest} from "../../Common"


const Contest = ({navigation}) => {

    const price =dummyData.ContestPricePool
  console.log("price", price);
    return (
        <View style={Header}>

           <ScrollView style={styles.scroller}>
               <FlatList 
                data = {price}
                keyExtractor={(item) => item.id}
                renderItem={({item ,index})=>(
                    <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ViewContest')
                    }
                  >
                    <IdolContest data={item} />
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index}
               />

              </ScrollView> 
         </View>
    )
}

export default Contest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:COLORS.secondary,
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
})
