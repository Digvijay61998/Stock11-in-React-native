import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import { COLORS, FONTS, icons, Header, images, CardBox, dummyData } from "../../../constants"
import React, { useState, useEffect } from 'react';

const CreateBasket = ({ navigation }) => {

  const editTeams = dummyData.BasketData

  const [editTeam, setEditTeam] = useState([])
  const [points, setPoints] = useState([])

  useEffect(() => {
    setEditTeam(editTeams)
  })

  const selectpoint = (item, index) => {
    if (points.includes(item.id)) {
      const newPoint = points.filter((itemId) =>
        itemId !== item.id);
      return setPoints(newPoint)
    }
    else if (points.length < 10) {
      setPoints([...points, item.id], index);
    }
    else {
      console.log("only 10 points can be selected");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[CardBox, styles.CardBasket]}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Image
          source={images.bitcoin}
          resizeMode="contain"
          style={{
            width: 45,
            height: 45,
            marginRight: 10
          }}
        />
          <Text style={[FONTS.textstyle, { fontSize: 30 }]}>Nifty50</Text></View>
        <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row" }}>
          <View style={{ fflexDirection: "column" }}>
            <Text style={[FONTS.textstyle, { fontSize: 10 }]}>Prize Pool  </Text>
            <Text style={[FONTS.textstyle, { fontSize: 13 }]}>4/10</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={[FONTS.textstyle, { fontSize: 10 }]}>Credits Left</Text>
            <Text style={[FONTS.textstyle, { fontSize: 13 }]}>60.0</Text>
          </View>
        </View>
       
        <View style={{ width: "100%", height: 35, borderRadius: 10, top: 15, backgroundColor: COLORS.secondary, alignItems: "center", justifyContent: "flex-start", flexDirection: "row" }}>
{ Array.apply(null, { length: 10}).map((e, i) => (
     <View >
          <Image key={i}
            source={icons.Ellipse}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              marginLeft: 10,
            }}
          />
              </View>
     ))}
{ Array.apply(null, { length: points.length}).map((e, i) => (
      <View style={{right:240,flexDirection: "row"}}>
          <Image key={i}
            source={icons.Group}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              // marginLeft:10,
            }}
          />
              <Image key={i}
            source={icons.rectangleBox}
            resizeMode="contain"
            style={{
              width: 10,
              height: 15,
              // marginLeft:10,
            }}
          />
              </View>
     ))}
        </View>
        <View style={{ width: "100%",alignItems: "center",bottom:15, right:10,justifyContent:"flex-end", flexDirection: "row" }}><Text style={[FONTS.textstyle,{color:COLORS.ActiveButton,fontSize: 13}]}>{points.length}/10</Text></View>
      </View>
      <View style={styles.Teamcontainer}>
        <View style={styles.EarnListTitle}>
          <Text style={FONTS.textstyle}>Stocks</Text>
          <Text style={FONTS.textstyle}>Credits</Text>
        </View>
        <ScrollView style={styles.scroller}>
          <FlatList
            data={editTeam}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={points.includes(item.id) ? [styles.EarnList, { backgroundColor: COLORS.secondary }] : styles.EarnList}
                onPress={() => selectpoint(item, index)}
              >
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"center"}}>
                 { points.includes(item.id) ? <Image
                    source={icons.Group}
                    resizeMode="contain"
                    style={{
                      width: 18,
                      height: 18,
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
                  />}
                  <Text style={[FONTS.textstyle, { fontSize: 14 }]}>{item.stocks}</Text>
                </View>
                <Text style={[FONTS.textstyle, { fontSize: 15 }]}>{item.points}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      </View>

      <TouchableOpacity style={[FONTS.button, { width: 300, marginTop: 60, bottom: 25 }]}
        onPress={() =>
          navigation.navigate('TeamsView')
        }
      >
        <Text style={[FONTS.textstyle, { color: "black" }]}>Contiue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateBasket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    alignItems: "center",
    justifyContent: "center"
  },
  scroller: {
    flex: 1,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.FaintWhite,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginTop: 10
  },
  EarnListTitle: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: 360,
    height: 50,
    backgroundColor: COLORS.HeaderBackground,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10

  },
  EarnList: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#575966",
    padding: 10,
    backgroundColor: COLORS.primary
  }
});
