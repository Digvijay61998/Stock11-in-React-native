import { StyleSheet, Text, View,TouchableOpacity, FlatList ,ImageBackground,SafeAreaView,ActivityIndicator} from 'react-native';
import React, { useState, useEffect }  from 'react';
import {COLORS, FONTS, icons, Header,contestContainer} from "../../../constants"
import {IdolContest} from "../../../Common/index"
import routes from '../../../../utils/routes'

const UpcomingEvents = ({navigation}) => {

  const [upcomingContest, setUpcomingContest] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

const getContestdetails = async () => {
console.log("upcomingContest=====",upcomingContest)
try {
    const parsedResponse = await routes.STOCK_11.APIS.GET_CONTEST_CARDS(`?page=${page}`);
    const data = parsedResponse.content
    if(parsedResponse.totalPages === page){
    setLoading(true)
    }
    setUpcomingContest([...upcomingContest,...data])
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
  style={{width:500,height:600,marginLeft:-50}}
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
        data={upcomingContest}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("UpcomingContestDetails")}
          >
                <ImageBackground
                resizeMode="cover"
               source={url[index % url.length]}
               style={contestContainer}
                >
            <IdolContest data={item}/>
            {/* <NewsCard news={item} /> */}

            </ImageBackground>
          </TouchableOpacity>
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
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  overflow:"hidden",
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
});
