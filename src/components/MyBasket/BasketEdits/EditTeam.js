import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity,FlatList } from 'react-native'
// import { COLORS, FONTS, icons, Header, CardBox ,dummyData} from "../../../constants"
import React,{useEffect,useState} from 'react';
import { COLORS, FONTS, icons, Header, CardBox ,dummyData } from '../../../../constants';

const EditTeam = ({navigation}) => {
    

    const leadStocks = dummyData.LeadStock

    const [leadStock ,setLeadStock]=useState([])
    const [pointsFS ,setPointsFS]=useState([])
    const [pointsLS ,setPointsLS]=useState([])
   
   const selectpointLS =(item) =>{
       if(item !== undefined){
            setPointsLS([item.id])
       }
    }
    const selectpointFS =(item) =>{
       if(item !== undefined){
            setPointsFS([item.id])
       }
        }

    useEffect(() => {
      setLeadStock(leadStocks)
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: 100, alignItems: "center", justifyContent: "center" }}>
                <Text style={FONTS.textstyle}>Choose your lead stock and Follow stock</Text>
                <Text style={[FONTS.textstyle, { fontSize: 13 }]}>LS gets 2x points, FS gets 1.5x points</Text>
            </View>
            <View style={styles.Teamcontainer}>
                <View style={styles.EarnListTitle}>
                    <Text style={FONTS.textstyle}>Stocks</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", width: 60 ,left:30}}>
                        <Text style={FONTS.textstyle}>LS</Text>
                        <Text style={[FONTS.textstyle,{marginLeft:30}]}>FS </Text>
                    </View>

                </View>
                <ScrollView style={styles.scroller}>
                <FlatList
          data={leadStock}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={styles.EarnList}>
            <Text style={[FONTS.textstyle, { fontSize: 14 }]}>{item.stocks}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around", width: 100 }}>
            <TouchableOpacity style={pointsLS.includes(item.id) ? styles.ActiveFSLS : styles.FSLS}
                onPress={() => selectpointLS(item)}
            >
               { pointsLS.includes(item.id)  ? <Text style={[FONTS.textstyle,{ fontSize: 13,color:COLORS.primary}]}>2x</Text>:<Text style={[FONTS.textstyle,{ fontSize: 13,}]}>LS</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={pointsFS.includes(item.id) ? styles.ActiveFSLS : styles.FSLS}
                  onPress={() => selectpointFS(item)}
                >
                {pointsFS.includes(item.id) ? <Text style={[FONTS.textstyle,{ fontSize: 13,color:COLORS.primary}]}>1.5x</Text>:<Text style={[FONTS.textstyle,{ fontSize: 13,}]}>FS</Text>}
                </TouchableOpacity>
            </View>
        </View>
          )}
          keyExtractor={(item, index) => index}
        />
                </ScrollView>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={[FONTS.button, { width: 160, marginTop: 60, bottom: 25, marginRight: 20 }]}
                    // onPress={() =>
                    //     navigation.navigate('')
                    // }
                >
                    <Text style={[FONTS.textstyle, { color:COLORS.primary  }]}>Preview</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[FONTS.button, { width: 160, marginTop: 60, bottom: 25 }]}
                    // onPress={() =>
                    //     navigation.navigate('')
                    // }
                >
                    <Text style={[FONTS.textstyle, { color:COLORS.primary }]}>Save Team</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default EditTeam;

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
    Teamcontainer: {
        flex: 1,
        backgroundColor: COLORS.secondary,

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
        padding: 10
    },
    FSLS: {
        width:30,
        height:30,
        justifyContent: "center" ,
        alignItems:"center",
        borderRadius: 50,
        backgroundColor:COLORS.LSFS
    },
    ActiveFSLS: {
        width:30,
        height:30,
        justifyContent: "center" ,
        alignItems:"center",
        borderRadius: 50,
        backgroundColor:COLORS.ActiveButton
    }
});
