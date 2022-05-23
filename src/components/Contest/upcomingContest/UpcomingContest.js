import { StyleSheet,Text,View,FlatList ,ImageBackground,SafeAreaView,ActivityIndicator} from 'react-native'
import {icons ,Header,SIZES,contestContainer,Scale} from "../../../constants"
import React,{useState,useEffect} from 'react'
import {IdolContest}from "../../../Common/index"
import routes from '../../../../utils/routes';

const UpcomingContest = ({navigation}) => {

  const [upcomingContest, setUpcomingContest] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

const getContestdetails = async () => {
console.log("upcomingContest=====",upcomingContest)
try {
    const parsedResponse = await routes.STOCK_11.APIS.GET_CONTEST_CARDS(`?page=${page}`);
    // &status=UP
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
        data={upcomingContest}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
                <ImageBackground
                resizeMode="cover"
               source={url[index % url.length]}
               style={contestContainer}
                >
            <IdolContest 
            data={item}
            page="UpcomingContestDetails"
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

export default UpcomingContest

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
        overflow: "hidden",
        marginBottom:Scale(180),
    },
})