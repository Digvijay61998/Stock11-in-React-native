import React from 'react'
import { StyleSheet, Text, View ,ScrollView ,SafeAreaView ,TouchableOpacity,FlatList} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,dummyData } from '../../../constants'
import {Basket} from "../../Common"

 const MyBasket = ({ navigation }) => {

   const data = dummyData.MybasketDetails
    return (
        <SafeAreaView style={Header}>
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
      <Basket data={item} />
            // {/* </TouchableOpacity> */}
          )}
          keyExtractor={(item, index) => index}
        />
    </ScrollView>
    <View style={{width: '100%', height:150,bottom:50 , alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={FONTS.button}
           onPress={() =>
            navigation.navigate('CreateContestBasket')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Create Basket</Text>
       </TouchableOpacity>

    </View>
    </SafeAreaView>
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
    
    TimeDate: {
        width: 350,
        height: 30,
        backgroundColor: "#252837",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
})
