import { StyleSheet, Text, View , SafeAreaView, ScrollView,TouchableOpacity ,FlatList,Image,ImageBackground} from 'react-native';
import React, { useState,useEffect ,useRef} from 'react';
import { COLORS, FONTS, icons,SIZES,Scale,verticalScale} from "../../../../constants"
import {LeadBoard} from "../../../../Common"
import LinearGradient from 'react-native-linear-gradient'
import Carousel,{Pagination} from 'react-native-snap-carousel';
import routes from '../../../../../utils/routes';


const CarouselCardItem = ({item, index }) => {
  // console.log("iiiteem",item);
  return (
    
    <ImageBackground
    resizeMode="cover"
    source={icons.card1}
    style={styles.contestContainer}
    >
<View style={[styles.IdolContainer,{width:Scale(270)}]}>
<View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%"}}>
    <Text style={{fontSize:14 ,color:"#032F81" ,fontWeight:"bold" ,fontFamily:"lato"}}>{item.contestName}</Text>
    <View></View>
</View>
<View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" ,marginTop:verticalScale(-10)}}>
    <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
        <Text style={{ color: "black" , fontSize:17,fontWeight:"bold" }}>WIN Rs.{item.poolSize}/-</Text>
        <Text style={{ color: "black" , fontSize:12}}>ENTRY FEE: Rs.1000/-</Text>
        <Text style={{ color: "#45444" , fontSize:14,fontWeight:"bold"}}>{item.totalWinners} Winners</Text>
   
    </View>
<View style={{justifyContent:"center",alignItems:"center"}}>
<Image 
    source={icons.IconUsers}
    resizeMode="contain"
    style={{
        width:30,
        height: 30,
       
}}
    />
    <Text style={{ color:COLORS.secondary, padding:6 ,borderRadius:10 , fontWeight: 'bold',}}>{item.poolSize}</Text>
    <Text style={{ color:COLORS.secondary,borderRadius:10 , fontWeight: 'bold',fontSize:11}}>Bulls</Text>
</View>
   
</View>
  <View style={{alignItems:"center",right:Scale(44),top:Scale(4)}}>
  <View style={{width: 180, height: 5, backgroundColor:"#4caea7", borderRadius: 10 }}>
  </View>
  <View style={{ justifyContent: "space-between", flexDirection: "row", width:230}}>
    <Text style={[FONTS.textstyle ,{fontSize:8 }]}></Text>
    <Text  style={[FONTS.textstyle ,{fontSize:10,color:"black"}]}>No more Spots!</Text>
  </View>
  </View>
</View>
<View style={styles.TimeDate}>
<Text style={{ color: "black" ,borderRadius: 10,fontFamily: 'lato',fontSize:10}}>{item.startDate-item.endDate}</Text>
</View>
</ImageBackground>
)
}

const UpcomingContestDetails = (props) => {
  console.log("props",props.route.name);
  const navigations = props.navigation 
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)
console.log(index);
  const [LiveContest, setLiveContest] = useState([]);
  const [winningPrice, setWinningPrice] = useState([]);

  const [page, setPage] = useState(0);
  console.log("page~~~~~~~~>",page);

  const getLiveContestdetails = async () => {
    try {
        const parsedResponse = await routes.STOCK_11.APIS.GET_CONTEST_CARDS(`?page=${page}`);
        const data = parsedResponse.content
        // console.log("parsedResponse=card=====>>",parsedResponse.content)
        if(parsedResponse.totalPages === page){
        }
        setLiveContest([...data])
        } catch (error) {
        console.log("FAIL=====")
        console.error(error);
    }
    }
    
    useEffect(() => {
      getLiveContestdetails();
      getLeaderBoardList();
        console.log("CURRENT PAGE", page);
    }, [page])
 
    const fetchMoreData = () => {
      if(index >=9){
            setPage(page + 1)
            setIndex(0)
      }else if(index == 0){
        setPage(page - 1)
      }
    }

    const getLeaderBoardList = async () => {
      const priceList = LiveContest[index].contestKey
      console.log("priceList============>",LiveContest[index].contestKey);
      try {
        const parsedResponse = await routes.STOCK_11.APIS.GET_CONTEST_CARDS(`/${priceList}`);
        console.log("parsedResponse=====>>>>>>>>",parsedResponse)
        setWinningPrice(parsedResponse)
      } catch (error) {
        console.log("FAIL=====")
        console.error(error);
      }
    }

    useEffect(() => {
      getLeaderBoardList();
        fetchMoreData()
    }, [index])

  return (
    <LinearGradient
    colors={['#93d5ce', '#11a99d','#5700AD','#7e72c5' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}>
           <Image 
         source={icons.Stock11Logo}
         resizeMode="contain"
         style={{
             width: 70,
             height: 70,
             top:5
   }}
    />
       <View style={{top:10,width:SIZES.width-120,alignItems:"center",justifyContent:"center"}}>
       <Carousel
          layout="tinder"
          layoutCardOffset={6}
          ref={isCarousel}
          data={LiveContest}
          renderItem={CarouselCardItem}
          sliderWidth={SIZES.width-50}
          itemWidth={Math.round(SIZES.width * 0.7)}
          onSnapToItem={(index) => setIndex(index)
      }
          useScrollView={true}
        />
  </View>
  <View style={{width:SIZES.width-360,height:20,top:-30}}>
  <Pagination
          dotsLength={LiveContest.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 50,
            marginHorizontal: 0,
            backgroundColor: '#fff'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
  </View>
  <Text style={styles.textLive}>LIVE</Text>
            <LeadBoard winning ={winningPrice}  navigation={navigations} name ={"contestDetails"}/>
            </LinearGradient>
            
    );
  };
  

export default UpcomingContestDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLORS.secondary,
    },
    contestContainer:{
      height: Scale(151),
      width: Scale(290),
      // backgroundColor: "#1F1D2B",
      marginBottom:verticalScale(35),
      right:Scale(10),
      borderRadius: 10,
      padding: 5,
      elevation:3,
    },
    IdolContainer: {
      position: "relative",
      width: Scale(350),
      height: Scale(140),
    },
    textstyle: {
      fontFamily: 'Poppins',
      color: "white",
      fontSize: 16,
      fontWeight: 'bold',
    },
    TimeDate: {
        width: Scale(325),
        height: Scale(20),
        marginTop:Scale(-18),
        paddingLeft:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius: 5
    },
    textLive:{
      color:"white",
      fontWeight:"bold",
      borderColor:"white",
      borderWidth:2,
      borderRadius:5,
      paddingTop:verticalScale(2),
      paddingLeft:Scale(12),
      paddingRight:Scale(10)
  }
});
