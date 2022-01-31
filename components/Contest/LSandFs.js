import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS, COLORS } from "../../constants";


const LeadStockandFollowStock = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
        <View>
        <Text style={[FONTS.textstyle,{fontSize:16,justifyContent:"center",textAlign:"center",paddingTop:50}]}>Choose Your Lead Stock and Follow Stock</Text>
        <Text style={[FONTS.textstyle,{fontSize:12,justifyContent:"center",textAlign:"center",paddingTop:10}]}>LS gets 2x points, FS gets 1.5x ponts</Text>
        <View style={styles.Teamcontainer}>
            <ScrollView>
                <View style={styles.EarnListTitle}>
                    <Text style={FONTS.textstyle}>Stocks</Text>
                    <Text style={[FONTS.textstyle, {paddingLeft:30}]}>LS </Text>
                    <Text style={[FONTS.textstyle,{paddingRight:30}]}>FS </Text>
                </View>
                <View style={styles.scroller}>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>LS</Text>
                        </View>
                    </View>
                    <View style={styles.EarnList}>
                        <Text style={[FONTS.textstyle, { fontSize: 14 }]}>Cadila Healthcare Ltd.</Text>
                        <View style={styles.ActiveFSLS}>
                            <Text style={[FONTS.textstyle, { fontSize: 13, color: COLORS.LSFS }]}>FS</Text>
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
                   
                </View>
                </ScrollView>
            </View>
        </View>
        <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={[FONTS.button, { width: 160, marginTop: 60, bottom: 25, marginRight: 20 }]}
                    onPress={() =>
                        navigation.navigate('Team Preview')
                    }
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
        
    )
}



const styles = StyleSheet.create({
    container: {  flex:1,
        backgroundColor: "#1F1D2B",
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
paddingTop:20,
maxHeight:500
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
    
    })
export default LeadStockandFollowStock;