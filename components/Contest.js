import React , { useState ,useEffect} from 'react'
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData} from "../constants"


const Contest = () => {

    const [prize, setPrize] = useState(dummyData.PrizePool)
    console.log("prize~~~~~~~~~~~>",prize[0])


const data = {
    id:dummyData.PrizePool[0].id,
    winners:dummyData.PrizePool.winners,
    entryFees:dummyData.PrizePool.entryFees,
    date:dummyData.PrizePool.date
}

console.log("data~~~~~~~~",data)

    return (
        <View style={Header}>
           <ScrollView style={styles.scroller}>
              <IdolContest prize={prize}/>
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
