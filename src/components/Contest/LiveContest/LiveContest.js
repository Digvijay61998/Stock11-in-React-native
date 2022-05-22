import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView,Image,TouchableOpacity, FlatList ,ImageBackground,ActivityIndicator, Button} from 'react-native'
import { COLORS, FONTS,icons, Header,SIZES,contestContainer} from "../../../constants"
import {IdolContest} from "../../../Common/index"
import routes from '../../../../utils/routes';
import {useDispatch, useSelector} from 'react-redux';
import {
  stockManagement,
  deleteProduct,
  getStoreView,
} from '../../../redux/StockManagment/Actions';

const LiveContest = ({navigation}) => {

  const dispatch = useDispatch();
  const {stockList, isFetching, error} = useSelector(
    state => state.stockManag,
  );
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log('@@@ Store View Response=====', stockList,isFetching);


  let stockViewList = stockList?.data?.content;
  stockViewList !== undefined && stockViewList;
  console.log('@@@ Store View Response=====', LiveContest);


 
const getContestdetails = async () => {
try {
    const parsedResponse = await routes.STOCK_11.APIS.GET_CONTEST_CARDS(`?page=${page}`);
    // &status=LIV
    const data = parsedResponse.content
    console.log("parsedResponse=====dsk",parsedResponse)
    if(parsedResponse.totalPages === page){
    setLoading(true)
    }
    setLiveContest()
    } catch (error) {
    console.log("FAIL=====")
    console.error(error);
}
}

  useEffect(() => {
   dispatch(stockManagement(page));
  }, [page])

  const fetchMoreData = () => {
    if(isFetching === false){
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

  // const handleData =(item)=>{
  //   console.log("item",item);

  // }

    // color image for background of image
    let url = [icons.card, icons.card1, icons.card3];
    
  return (
    <SafeAreaView style={Header}>
      <View style={styles.scroller}>
        <FlatList
          // data={LiveEvents}
          data={stockViewList}
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
              {/* <NewsCard news={item} /> */}

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
        width:SIZES.width-50,
        // overflow: "hidden",
        marginBottom:SIZES.height-610,
      },
    
})