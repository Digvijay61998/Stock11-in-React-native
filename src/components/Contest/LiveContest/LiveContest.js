import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { topHeadlineRequest } from '../../../../store/action'
import { StyleSheet, Text, View, ScrollView, SafeAreaView,TouchableOpacity, FlatList ,ImageBackground,ActivityIndicator, Button} from 'react-native'
import { COLORS, FONTS, icons, Header, CardBox,dummyData ,SIZES,contestContainer} from "../../../constants"
import {IdolContest} from "../../../Common/index"
import routes from '../../../../utils/routes';


const LiveContest = ({navigation,newsModel, dispatch}) => {
  
   
 
  const [page, setPage] = useState(1);

  const requestAPI = () => {
      dispatch(topHeadlineRequest({
           page: page
      }))
  }

const getTopHeadlineRequest = async () => {
console.log("parsedResponse=====")
try {
    const parsedResponse = await routes.STOCK_11.APIS.GET_CONTEST_CARDS();
    console.log("parsedResponse=====",parsedResponse)
    } catch (error) {
    console.log("FAIL=====")
    console.error(error);
}
}

  useEffect(() => {
    getTopHeadlineRequest();
      requestAPI();
      console.log("CURRENT PAGE", page);
  }, [page])

  const fetchMoreData = () => {
      if (!newsModel.isListEnd && !newsModel.moreLoading) {
          setPage(page + 1)
      }
  }

  const renderHeader = () => (
      <Text style={styles.title}>RN News</Text>
  )

  const renderFooter = () => (
      <View style={styles.footerText}>
          {newsModel.moreLoading && <ActivityIndicator />}
          {newsModel.isListEnd && <Text>No more articles at the moment</Text>}
      </View>
  )

  const renderEmpty = () => (
      <View style={styles.emptyText}>
          <Text>No Data at the moment</Text>
          <Button onPress={() => requestAPI()} title='Refresh'/>
      </View>
  )

  console.log({newsModel})
    // color image for background of image
    let url = [icons.card, icons.card1, icons.card3];
  return (
    <SafeAreaView style={Header}>
           {newsModel.loading ?
                <View style={styles.loading}>
                    <ActivityIndicator size='large' />
                </View>
                :
      <ScrollView style={styles.scroller}>
        <FlatList
          // data={LiveEvents}
          data={newsModel.data}
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
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
}
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  return {
      newsModel: state.news
  }
};
export default connect(mapStateToProps)(LiveContest);

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
        overflow: "hidden",
        marginBottom:SIZES.height-610,
      },
    
})