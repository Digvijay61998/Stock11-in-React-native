import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View,SafeAreaView,FlatList ,ImageBackground,ActivityIndicator} from 'react-native'
import {icons,Header,contestContainer,Scale,verticalScale} from "../../../constants"
import {IdolContest} from "../../../Common/index"
import routes from '../../../../utils/routes';


const LiveContest = ({navigation}) => {
  const [LiveContest, setLiveContest] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
 
const getContestdetails = async () => {
try {
    const parsedResponse = await routes.STOCK_11.APIS.GET_CONTEST_CARDS(`?page=${page}`);
    // &status=LIV
    const data = parsedResponse.content
    console.log("parsedResponse=====dsk",parsedResponse)
    if(parsedResponse.totalPages === page){
    setLoading(true)
    }
    setLiveContest([...LiveContest,...data])
    } catch (error) {
    console.log("FAIL=====")
    console.error(error);
}
}

  useEffect(() => {
    getContestdetails();
      console.log("CURRENT PAGE", page);
  }, [page])

  const fetchMoreData = () => {
    if(loading === false){
          setPage(page + 1)
    }
  }

  const renderFooter = () => (
      <View style={{alignItems:"center"}}>
          {loading === false ? <ActivityIndicator />:null}
          {loading  === true ? <Text>No more Contest at the moment</Text>:null}
      </View>
  )

  const renderEmpty = () => (
      <View style={styles.emptyText}>
         <ImageBackground
  resizeMode="cover"
  source={icons.emptyFile}
  style={{width:Scale(500),height:Scale(600),marginLeft:Scale(-50)}}
  />
      </View>
  )
    // color image for background of image
    let url = [icons.card, icons.card1, icons.card3];
    
  return (
    <SafeAreaView style={Header}>
      <View style={styles.scroller}>
        <FlatList
          // data={LiveEvents}
          data={LiveContest}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
                  <ImageBackground
                  resizeMode="cover"
                 source={url[index % url.length]}
                 style={contestContainer}
                  >
              <IdolContest 
              data={item}
              navigation={navigation}
              />
              </ImageBackground>
          )}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          onEndReachedThreshold={0.5}
          onEndReached = {({distanceFromEnd})=>{ 
              fetchMoreData()
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  )
}

export default LiveContest

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
        width:Scale(327),
        marginBottom:verticalScale(180),
      },
    
})