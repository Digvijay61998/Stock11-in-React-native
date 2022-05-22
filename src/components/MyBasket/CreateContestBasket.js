import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, FlatList, ImageBackground} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTS, icons, Header, CardBox, dummyData, SIZES } from "../../constants"
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import routes from '../../../utils/routes';
import { TextInput } from 'react-native-gesture-handler';

const CreateContestBasket = (props) => {
  const navigation = props.navigation.navigate || []
  const basketKey = props.route.params.basketKey || []
console.log("basketKey",basketKey);
  const [points, setPoints] = useState([])
  const [editTeam, setEditTeam] = useState([]);
  const [stockList, setStockList] = useState()

  // console.log("counter", editTeam[0].count);
  // item.stockDTO.stocksId
  function handleEvent(item) {
    console.log("newData", item);
  }


  const increment = (item, index) => {
    const stock = editTeam[index]
    console.log("stock",stock);
    stock.count = stock.count ? Number(stock.count) + 1 : 1;
    console.log("stock----",stock.count);
    editTeam[index] = stock;
    setEditTeam([...editTeam]);
  }

  const decrement = (item, index) => {
    const stock = editTeam[index]
    stock.count = stock.count ? Number(stock.count) - 1 : 1;
    editTeam[index] = stock;
    setEditTeam([...editTeam]);
  }

const handleInputValue =(val,item,index)=>{
  console.log("stock",val);

  const stock = editTeam[index]
    // if(stock.count){
    stock.count = val ? val : 0;
    editTeam[index]=stock;
  setEditTeam([...editTeam]);
}


const handleSubmit =async()=>{
  const userKey = await AsyncStorage.getItem('userKey');
  let res = []
  editTeam.map((item ,index) => {
    if(item.count > 0){
    res.push({
      "sequence": item.sequence,
      "stocksKey": item.stockDTO.stocksKey,
      "weightage": item.count || 0
    })
  }
  })
  setStockList(res)
    const data ={
      basketName: "Niftyssssdcifty",
      contestKey: basketKey,
      stockList: stockList,
            userKey: userKey
          }
           createBasketList(data)
}
  
      // if(points.length === 10){
      //   const data ={
      //     basketName: "Niftyssssdcifty",
      //     contestKey: 2,
      //     stockList: [
      //       {
      //         "sequence": 2,
      //         "stockKey": 0,
      //         "weightage": 10
      //       }
      //     ],
      //     userKey: 44
      //   }
      //   console.log("data",data)
      // }
    

  // const increment = (item,index) =>{
  //   // console.log("item{",item);
  //   // console.log("ind",index)
  //   const stock = editTeam[index]
  //   console.log("stock",stock);
  //   // if(stock.count){
  //   stock.count = stock.count? stock.count + 1 : 1;
  //   editTeam[index]=stock;
  // setEditTeam([...editTeam]);
  //   // }
  // setCounter(editTeam)

  //   }


  // const decrement = (item,index) =>{
  //   const stock = editTeam[index]
  //   stock.count = stock.count? stock.count - 1 : 1;
  //   editTeam[index]=stock;
  // setEditTeam([...editTeam]);
  // }


  useEffect(() => {
    // setEditTeam(editTeam.map(i => {
    //   i["count"] = 0;
    //   return i;
    // }))
    setEditTeam((team)=>{
      team = editTeam.map(i => {
        i["count"] = 0;
        return i;
      })
    })
  }, []);

  // const selectpoint = (item, index) => {
  //   if (points.includes(item.id)) {
  //     const newPoint = points.filter((itemId) =>
  //       itemId !== item.id);
  //     return setPoints(newPoint)
  //   }
  //   else if (points.length < 10) {
  //     setPoints([...points, item.id], index);
  //   }
  //   else {
  //     console.log("only 10 points can be selected");
  //   }
  // }

  // function handleSubmit (){
  //   console.log("counter",points.length)
  //   if(points.length === 10){
  //     const data ={
  //       basketName: "Niftyssssdcifty",
  //       contestKey: 2,
  //       stockList: [
  //         {
  //           "sequence": 2,
  //           "stockKey": 0,
  //           "weightage": 10
  //         }
  //       ],
  //       userKey: 44
  //     }
  //     console.log("data",data)
  //   }
  //   // createBasketList()
  // }
  //Get api called
  const getBasket = async () => {
    const userKey = await AsyncStorage.getItem('userKey');
    console.log("userKey", userKey);
    try {
      const parsedResponse = await routes.STOCK_11.APIS.GET_BASKETS(`/${basketKey}`);
      const list = parsedResponse.stockList
      console.log("parsedResponse=====12323434", JSON.stringify(parsedResponse.stockList))
      setEditTeam(list)
    } catch (error) {
      console.log("FAIL=====",error)
      console.error(error);
    }
  }

  // Post api Called
  async function createBasketList(data) {
    console.log("data==========>",data);

    let body = await data
    console.log("body==========>",body);
    try {
      const parsedResponse = await routes.STOCK_11.APIS.UPDATE_CREATE_BASKET(body);
      console.log("parsedResponse=====", parsedResponse)
      // setUserData(parsedResponse)
      // if (parsedResponse) {
      //   await AsyncStorage.setItem('userId', parsedResponse.twoFAuthForm.userId);
      //   let userKey = String(parsedResponse.userDTO.userKey)
      //   console.log("userKey~~~~~~~>", userKey);
      //   await AsyncStorage.setItem('userKey', userKey);
      //   navigation.navigate('OtpVerification', { Data: parsedResponse, ForgotPassword: props.route.params });
      // }
    } catch (error) {
      console.log("FAIL=====",error)
      console.error(error);
    }
  }

  useEffect(() => {
    getBasket()
  }, [])
  return (
    <LinearGradient
      colors={['#93d5ce', '#11a99d', '#5700AD', '#6256ac']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image
        source={icons.Stock11Logo}
        resizeMode="contain"
        style={{
          width: 70,
          height: 70,
          marginBottom: 30

        }}
      />
      <ImageBackground
        resizeMode="cover"
        source={icons.card}
        style={styles.contestContainer}
      >

        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
          <Text style={{ fontSize: 14, color: "#032F81", fontWeight: "bold", fontFamily: "lato" }}></Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%", marginTop: -10 }}>
          <View style={{ justifyContent: "space-between", flexDirection: "column", height: 80, top: 15 }}>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>STOCK FESTIVAL</Text>
            <Text style={{ color: "black", fontSize: 12 }}>Correspondant Contest - Nifty Fifty</Text>
            <Text style={{ color: "#45444", fontSize: 12, fontWeight: "bold" }}>1st OCT -3rd OCT 2022</Text>

          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={icons.basket}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                top: -40
              }}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.Teamcontainer}>
        <View style={styles.EarnListTitle}>
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 18 }}>EDIT BASKET</Text>
          <Text style={{ fontWeight: "bold", top: 10, fontSize: 10 }}>SELECTED {points.length} PLEASE ADD {10 - points.length} MORE</Text>
          <View style={[styles.headerTitle, { marginTop: 20, borderBottomWidth: 1, borderTopWidth: 1, borderColor: "#e4e2e4", height: 30 }]}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 12 }}>POINTS:100</Text>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 12 }}>POINTS LEFT: {10 - points.length}</Text>
          </View>
          <View style={styles.headerTitle}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 12 }}>STOCKS</Text>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 12 }}>WEIGHTAGE</Text>
          </View>
        </View>
        <ScrollView style={styles.scroller}>
          <FlatList
            data={editTeam}
            // keyExtractor={(item) => item.id}
            points
            renderItem={({ item, index }) => (
              <TouchableOpacity
              style={item.count >= 1  ? [styles.EarnList, { backgroundColor:"#e7f0f2"}] : styles.EarnList}
                onPress={() => handleEvent(item.stockDTO, index)}
              >
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                  {/* { points.includes(item.id) ? <Image
                  source={icons.Group}
                  resizeMode="contain"
                  style={{
                    width: 18,
                    height: 15,
                    marginRight:10
                  }}
                />:
                <Image
                  source={icons.Ellipse}
                  resizeMode="contain"
                  style={{
                    width: 18,
                    height: 18,
                    marginRight: 10
                  }}
                />} */}
                  <Text style={[FONTS.textstyle, { fontSize: 14 }]}>{item.stockDTO.stocksName}</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "space-around", display: "flex", flexDirection: 'row' }}>
                  <View style={{ paddingRight: 3 }}>
                    <TouchableOpacity style={{
                      width: 20, height: 20,
                      justifyContent: "center", alignItems: "center"
                    }}
                      onPress={() => decrement(item, index)}
                    >
                      <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TextInput style={[FONTS.textstyle, { fontSize: 15, backgroundColor: "#fff", padding: 1, paddingLeft: 10, paddingRight: 10 }]}
                      name="weightage"
                      maxLength={2}
                      onChangeText={(val)=>{handleInputValue(val,item,index)}}
                      // value={setvalue}
                      placeholder='0'
                      placeholderTextColor="black"
                    >
                      {item.count ? item.count: 0}
                    </TextInput>
                  </View>
                  <View style={{ paddingLeft: 3 }}>
                    <TouchableOpacity style={{
                      width: 15, height: 15,
                      justifyContent: "center", alignItems: "center"
                    }}
                      onPress={() => increment(item, index)} >
                      <Text style={{ fontSize: 14, fontWeight: "bold", color: "black", bottom: 2 }}>+</Text>
                    </TouchableOpacity>

                  </View>

                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
        <TouchableOpacity style={[FONTS.button, { width: SIZES.width - 200, marginTop: 60, bottom: 25 }]}
          onPress={() =>
            handleSubmit()
            // navigation.navigate('Team Preview', {
            //   paramKey: counter,
            // })
          }
        >
          <Text style={[FONTS.textstyle, { color: "white" }]}>Contiue</Text>
        </TouchableOpacity>
      </View>


    </LinearGradient>
  );
};

export default CreateContestBasket;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    alignItems: "center",
    justifyContent: "center",
    height: 600,

  },
  scroller: {
    flex: 1,
    overflow: "hidden",
    marginTop: 50,
    paddingLeft: 15,
    paddingRight: 15
  },
  CardBasket: {
    backgroundColor: COLORS.HeaderBackground,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginTop: 15
  },
  Teamcontainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fcf4ff",
    marginTop: -80,
    borderRadius: 20,
    height: 600,
  },
  EarnListTitle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: 360,
    height: 50,
    marginTop: 110,
  },
  EarnList: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    width: 300,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: COLORS.primary
  },
  contestContainer: {
    height: 130,
    width: SIZES.width - 120,
    // backgroundColor: "#1F1D2B",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    padding: 5,
    elevation: 3,
  },
  headerTitle: {
    width: 300,
    height: 25,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15
  }

});

