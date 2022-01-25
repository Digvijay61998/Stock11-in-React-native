import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, Header, CardBox } from "../../../constants"
import React from 'react';

const TeamsView = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Teamcontainer}>
                <View style={styles.EarnListTitle}>
                    <Text style={FONTS.textstyle}>Stocks</Text>
                    <Text style={FONTS.textstyle}>LS & FS</Text>
                </View>
                <ScrollView style={styles.scroller}>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>

                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <TouchableOpacity style={[FONTS.button, { width: 140, marginTop: 60, bottom: 25 }]}
                onPress={() =>
                    navigation.navigate('EditTeam')
                }
            >
                <Text style={[FONTS.textstyle, { color: "black" }]}>Edits</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default TeamsView;

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
