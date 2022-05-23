import React, { useState, useEffect,useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView,TouchableOpacity, FlatList ,ImageBackground,ActivityIndicator, Button,AsyncStorage} from 'react-native'
import {icons, Header,contestContainer,verticalScale} from "../../../constants"
import {IdolContest} from "../../../Common/index"
import routes from '../../../../utils/routes';

const FollowingContest = ({navigation}) => {
    const [CompletedEvents, setCompletedEvents] = useState();
    const [page, setPage] = useState(0);
  
  const getContestdetails = async () => {
    const userId = await AsyncStorage.getItem('userId');
console.log("userId",userId);
  try {
      const parsedResponse = await routes.STOCK_11.APIS.GET_PIN_CONTEST(`${userId}`);
      console.log("parsedResponse======>",parsedResponse);
      const data = parsedResponse
      // if(parsedResponse.totalPages === page){
      // setLoading(true)
      // }
      setCompletedEvents(data)
      } catch (error) {
      console.log("FAIL=====")
      console.error(error);
  }
  }

    useEffect(() => {
      getContestdetails();
    }, [])
  
      let url = [icons.card, icons.card1, icons.card3];
  return (
    <SafeAreaView style={Header}>
    <View style={styles.scroller}>
      <FlatList
        // data={LiveEvents}
        data={CompletedEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CompletedContestDetails",{
            Param: 'follow Contest'
            })
          }
          >
                <ImageBackground
                resizeMode="cover"
               source={url[index % url.length]}
               style={contestContainer}
                >
            <IdolContest data={item}
            />
            </ImageBackground>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  </SafeAreaView>
  )
}

export default FollowingContest

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
        overflow: "hidden",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:verticalScale(180),
      },
 
})