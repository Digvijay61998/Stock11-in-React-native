import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, FlatList, ImageBackground, Image } from 'react-native'
import { COLORS, FONTS, icons, Header, CardBox, dummyData } from "../../constants/index"
import { IdolContest } from "../../Common"
import LinearGradient from 'react-native-linear-gradient'
import routes from '../../../utils/routes'

const MyBasket = ({ navigation }) => {

  let url = [icons.card, icons.card1, icons.card3];
  const [blur, setBlur] = useState()
  const [basketList ,setBasketList]=useState()

  function handleblur(item) {
    console.log("item",item.basketId);
    setBlur(item.basketId)
  }


  //Get api called
  const getBasketList = async () => {
    try {
      const parsedResponse = await routes.STOCK_11.APIS.GET_BASKETS_LISTS(`8672390090`);
      console.log("parsedResponse=====", parsedResponse)
      setBasketList(parsedResponse)
    } catch (error) {
      console.log("FAIL=====")
      console.error(error);
    }
  }

  useEffect(() => {
    getBasketList()
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

        }}
      />
      <View style={styles.basketContainer}>
        <SafeAreaView style={Header}>
          <View style={styles.textHeader}><Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>MY BASKET</Text><Image source={icons.addButton} /></View>
          <ScrollView styles={styles.scroller}>
            <View style={{marginBottom:100}}>
            <FlatList
              data={basketList}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                // <TouchableOpacity
                //   onPress={() =>
                //     navigation.navigate('CompletedContestDetails')
                //   }
                // >
                <>
                  <View style={blur === item.basketId ? [styles.Visible] : [styles.disable]}>
                    <ImageBackground
                      resizeMode="cover"
                      source={url[index % url.length]}
                      style={styles.contestContainer}
                    >
                      <View style={[styles.IdolContainer, { width: 280 }]}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                          <Text style={{ fontSize: 14, color: "#032F81", fontWeight: "bold", fontFamily: "lato" }}>{item.basketName}</Text>
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
                      </View>
                    </ImageBackground>
                  </View>
                  <View style={{ width: 280, alignItems: "center", justifyContent: "space-between", marginBottom: 25, flexDirection: "row" }}>
                    <Text>icon</Text>
                    <TouchableOpacity style={FONTS.button}
                      onPress={() =>
                        navigation.navigate('CreateContestBasket',{basketKey:item.basketKey})
                      }
                    >
                      <Text style={[FONTS.textstyle, { color: "white" }]}>EDIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleblur(item, index)}
                    >
                      <Text>EDIT</Text>
                    </TouchableOpacity>
                  </View>
                </>
                //  </TouchableOpacity>

              )}
              keyExtractor={(item, index) => index}
            />
            </View>
          </ScrollView>

        </SafeAreaView>
      </View>
    </LinearGradient>
  )
}

export default MyBasket

const styles = StyleSheet.create({
  Container: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.secondary,

  scroller: {
    flex: 1,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",

  },
  TimeDate: {
    width: 350,
    height: 30,
    backgroundColor: "#252837",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  basketContainer: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    top: 100,
    borderRadius: 20
  },
  contestContainer: {
    height: 140,
    width: 289,
    marginBottom: 15,
    borderRadius: 10,
    padding: 5,
    // elevation:3,
  },
  textHeader: {
    width: 200,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 70,
  },
  Visible: {
    opacity: 1
  },
  disable: {
    opacity: 0.3
  }
})
