import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity,FlatList  } from 'react-native'
import React,{useEffect,useState} from 'react';
import { COLORS, FONTS, icons, Header, CardBox ,dummyData  } from '../../../constants';

const TeamPreview = ({ navigation, route }) => {
    const teamViews = dummyData.TeamView

    const [teamView, setTeamView] = useState([])

    useEffect(() => {
        setTeamView(teamViews)
    })

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.Teamcontainer}>
            <View style={styles.EarnListTitle}>
                <Text style={FONTS.textstyle}>Stocks</Text>
                <Text style={[FONTS.textstyle,{left:35}]}>Weightage</Text>
            </View>
            <ScrollView style={styles.scroller}>
                <FlatList
                    data={teamView}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <View style={styles.EarnList}>
                            <Text style={[FONTS.textstyle, { fontSize: 14 ,margin:4}]}>{item.stocks}</Text>
                            {/* {item.LsFs !== "" ? <View style={styles.ActiveFSLS}> */}
                                {/* <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>{item.LsFs}</Text> */}
                            {/* </View>:<></>} */}
                            <Text style={[FONTS.textstyle, { fontSize: 14 ,marginRight:24}]}> {route.params.paramKey}</Text>

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
                    <Text style={[FONTS.textstyle, { color:COLORS.primary  }]}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[FONTS.button, { width: 160, marginTop: 60, bottom: 25 }]}
                    onPress={() =>
                        navigation.navigate('Select Basket')
                    }
                >
                    <Text style={[FONTS.textstyle, { color:COLORS.primary }]}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default TeamPreview;

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
        paddingTop: 25
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
    ActiveFSLS: {
        width: 30,
        height: 30,
        marginRight: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: COLORS.ActiveButton
    }
});
