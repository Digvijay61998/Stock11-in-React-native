import React, { useState, useEffect }  from 'react';

import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList ,ImageBackground} from 'react-native'
import { COLORS, FONTS, icons, Header, CardBox, dummyData ,SIZES} from "../../../constants"
import {IdolContest} from "../../../Common/index"

const FollowingContest = ({navigation}) => {
    const [CompletedEvents,setCompletedEvents]=useState()

    const CompletedPriceEvents = dummyData.CompletedPricePool
  
    useEffect(() => {
      if(CompletedPriceEvents === undefined){
        setCompletedEvents("")
      }else{
        setCompletedEvents(CompletedPriceEvents)
      }
    });
    let url = [icons.card, icons.card1, icons.card3];

  return (
    <View style={Header}>
      <ScrollView style={styles.scroller}>
        <FlatList
          data={CompletedEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CompletedContestDetails')
              }
            >
              <ImageBackground
            resizeMode="cover"
            source={url[index % url.length]}
            style={styles.contestContainer}
            >
           <IdolContest data={item} />
           </ImageBackground>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </View>
  )
}

export default FollowingContest

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
        overflow: "hidden",
        marginBottom:SIZES.height-610,
      },
      contestContainer:{
        height: 180,
        width: 340,
        // backgroundColor: "#1F1D2B",
        marginBottom:35,
        borderRadius: 10,
        padding: 5,
        elevation:3,
      },
})