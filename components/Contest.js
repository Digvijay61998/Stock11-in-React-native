import React from 'react'
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest} from "../constants"




const Contest = (navigation) => {

    return (
        <View style={Header}>
           <ScrollView style={styles.scroller}>
              <IdolContest/>
              <IdolContest/>
              <IdolContest/>
              <IdolContest/>
              <IdolContest/>
              <IdolContest/>
              <IdolContest/>
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
})
