import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest} from "../../constants"
import {LiveEvents, UpcomingEvents, CompletedEvents} from "./UpcomingLiveEvents"


const MyContest = () => {
    return (
            <View style={Header}>
              <View style={{alignItems: "center",justifyContent:"space-around",flexDirection:"row"}}>
                <View></View>
          </View>
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


export default MyContest

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
      overflow:"hidden",
    },
})
