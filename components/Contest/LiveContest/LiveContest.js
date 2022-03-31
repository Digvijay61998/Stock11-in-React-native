import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList ,ImageBackground} from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONTS, icons, Header, CardBox,dummyData ,SIZES,contestContainer} from "../../../constants"
import {IdolContest} from "../../../Common/index"

const LiveContest = ({navigation}) => {
    const LivePriceEvents = dummyData.LivePricePool
  
    const [LiveEvents,setLiveEvents]=useState()
    useEffect(() => {
      if(LivePriceEvents === undefined){
        setLiveEvents("")
      }else{
        setLiveEvents(LivePriceEvents)
      }
    });
  
    let url = [icons.card, icons.card1, icons.card3];
  return (
    <View style={Header}>
      <ScrollView style={styles.scroller}>
        <FlatList
          data={LiveEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("LiveContestDetails")}
            >
                  <ImageBackground
                  resizeMode="cover"
                 source={url[index % url.length]}
                 style={contestContainer}
                  >
              <IdolContest data={item}/>
              </ImageBackground>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </View>
  )
}

export default LiveContest

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
        overflow: "hidden",
      },
    
})