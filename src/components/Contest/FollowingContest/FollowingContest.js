import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView,TouchableOpacity, FlatList ,ImageBackground,ActivityIndicator, Button,AsyncStorage} from 'react-native'
import { COLORS, FONTS, icons, Header, CardBox,dummyData ,SIZES,contestContainer} from "../../../constants"
import {IdolContest} from "../../../Common/index"
import routes from '../../../../utils/routes';

const FollowingContest = ({navigation}) => {
//   const name ="follow Contest"
//     const [CompletedEvents, setCompletedEvents] = useState();
//     const [page, setPage] = useState(0);
//     const [loading, setLoading] = useState(false);
  
//   const getContestdetails = async () => {
//     const userId = await AsyncStorage.getItem('userId');
// console.log("userId",userId);
//   try {
//       const parsedResponse = await routes.STOCK_11.APIS.GET_PIN_CONTEST(`${userId}`);
//       console.log("parsedResponse======>",parsedResponse);
//       const data = parsedResponse
//       // if(parsedResponse.totalPages === page){
//       // setLoading(true)
//       // }
//       setCompletedEvents(data)
//       } catch (error) {
//       console.log("FAIL=====")
//       console.error(error);
//   }
//   }

//   useEffect(() => {
//       getContestdetails();
//         console.log("CURRENT PAGE", page);
//     }, [page])
  
//     const fetchMoreData = () => {
//       if(loading === false){
//             setPage(page + 1)
//       }
//     }
  
//     const renderFooter = () => (
//         <View style={{alignItems:"center"}}>
//             {loading === false ? <ActivityIndicator />:null}
//             {loading  === true ? <Text>No more Contest at the moment</Text>:null}
//         </View>
//     )
  
//     const renderEmpty = () => (
//         <View style={styles.emptyText}>
//            <ImageBackground
//     resizeMode="cover"
//     source={icons.emptyFile}
//     style={{width:500,height:600,marginLeft:-50}}
//     />
//         </View>
//     )
  
//       // color image for background of image
//       let url = [icons.card, icons.card1, icons.card3];
  return (
    <></>
  //   <SafeAreaView style={Header}>
  //   <View style={styles.scroller}>
  //     <FlatList
  //       // data={LiveEvents}
  //       data={CompletedEvents}
  //       keyExtractor={(item) => item.id}
  //       renderItem={({ item, index }) => (
  //         <TouchableOpacity
  //           onPress={() => navigation.navigate("CompletedContestDetails",{
  //           Param: 'follow Contest'
  //           })
  //         }
  //         >
  //               <ImageBackground
  //               resizeMode="cover"
  //              source={url[index % url.length]}
  //              style={contestContainer}
  //               >
  //           <IdolContest data={item}/>
  //           {/* <NewsCard news={item} /> */}

  //           </ImageBackground>
  //         </TouchableOpacity>
  //       )}
  //       ListFooterComponent={renderFooter}
  //       ListEmptyComponent={renderEmpty}
  //       onEndReachedThreshold={0.5}
  //       onEndReached = {({distanceFromEnd})=>{ 
  //           fetchMoreData()
  //       }}
  //       keyExtractor={(item, index) => index}
  //     />
  //   </View>
  // </SafeAreaView>
  )
}

export default FollowingContest

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
        overflow: "hidden",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:SIZES.height-610,
      },
 
})