import { StyleSheet, Text, View,TouchableOpacity, FlatList ,ImageBackground,SafeAreaView,ActivityIndicator,AsyncStorage} from 'react-native';
import React, { useState, useEffect }  from 'react';
import {icons, Header,contestContainer} from "../../../constants"
import {IdolContest} from "../../../Common/index"
import routes from '../../../../utils/routes'

const LiveEvents = ({ navigation ,Mycontest}) => {
  
  const [LiveContest, setLiveContest] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
console.log("loading",loading);


const getContestdetails = async () => {
  const userId = await AsyncStorage.getItem('userId');
  console.log("LiveContest=====",userId)
  try {
      const parsedResponse = await routes.STOCK_11.APIS.GET_CONTEST_CARDS(`?page=${page}&status=LIV&userId=${userId}`);
      const data = parsedResponse.content
      console.log("parsedResponse=====",parsedResponse.totalPages)
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
          data={LiveContest}
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

export default LiveEvents;

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
    overflow: "hidden",
  },
});
