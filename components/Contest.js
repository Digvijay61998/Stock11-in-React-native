import React from 'react'
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'

const Contest = () => {

    return (
        <View style={styles.Header}>

           <ScrollView style={styles.scroller}>
            <TouchableOpacity
                    // onPress={() => navigation.navigate("ViewContest")}
                >
                <View style={styles.IdolConte}>
                    <View style={styles.IdolContainer}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <Text style={styles.textstyle}>Idol Contest</Text>
                            <Text style={styles.textstyle}>Entry</Text>
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                                <Text style={{ color: "white" , fontSize:10 , }}>prize pool</Text>
                                <Text style={styles.textstyle}>Rs. 10,000</Text>
                            </View>
                            <Text style={styles.textstyle}>5 Winners</Text>
                            <Text style={{ color: "black", backgroundColor: "#0BFEBC", padding:6 ,borderRadius:10 , fontWeight: 'bold',}}>Rs. 1,000</Text>
                        </View>
                        <View style={{ width:150 ,height:5 , backgroundColor: "#0BFEBC" ,left:100 , top:30 , borderRadius: 10}}>
                        <View style={{ position:"absolute",width:100 ,height:5, backgroundColor: "red" ,left:100 , top:30 ,}}></View>

                        </View>
                    </View>
                    <View style={styles.TimeDate}>
                        <Text style={{ color: "white" ,borderRadius: 10  , fontFamily: 'Poppins',}}>st Oct 2021 to 3rd oct 2021</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CryptoDetail")}
                >
                <View style={styles.IdolConte}>
                    <View style={styles.IdolContainer}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <Text style={styles.textstyle}>Idol Contest</Text>
                            <Text style={styles.textstyle}>Entry</Text>
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                                <Text style={{ color: "white" , fontSize:10 , }}>prize pool</Text>
                                <Text style={styles.textstyle}>Rs. 10,000</Text>
                            </View>
                            <Text style={styles.textstyle}>5 Winners</Text>
                            <Text style={{ color: "black", backgroundColor: "#0BFEBC", padding:6 ,borderRadius:10 , }}>Rs. 1,000</Text>
                        </View>
                        <View style={{ width:150 ,height:5 , backgroundColor: "#0BFEBC" ,left:100 , top:30 , borderRadius: 10}}>
                        <View style={{ position:"absolute",width:100 ,height:5, backgroundColor: "red" ,left:100 , top:30 ,}}></View>

                        </View>
                    </View>
                    <View style={styles.TimeDate}>
                        <Text style={{ color: "white" ,borderRadius: 10  , fontFamily: 'Poppins',}}>st Oct 2021 to 3rd oct 2021</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CryptoDetail")}
                >
                <View style={styles.IdolConte}>
                    <View style={styles.IdolContainer}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <Text style={styles.textstyle}>Idol Contest</Text>
                            <Text style={styles.textstyle}>Entry</Text>
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                                <Text style={{ color: "white" , fontSize:10 , }}>prize pool</Text>
                                <Text style={styles.textstyle}>Rs. 10,000</Text>
                            </View>
                            <Text style={styles.textstyle}>5 Winners</Text>
                            <Text style={{ color: "black", backgroundColor: "#0BFEBC", padding:6 ,borderRadius:10 , }}>Rs. 1,000</Text>
                        </View>
                        <View style={{ width:150 ,height:5 , backgroundColor: "#0BFEBC" ,left:100 , top:30 , borderRadius: 10}}>
                        <View style={{ position:"absolute",width:100 ,height:5, backgroundColor: "red" ,left:100 , top:30 ,}}></View>

                        </View>
                    </View>
                    <View style={styles.TimeDate}>
                        <Text style={{ color: "white" ,borderRadius: 10  , fontFamily: 'Poppins',}}>st Oct 2021 to 3rd oct 2021</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CryptoDetail")}
                >
                <View style={styles.IdolConte}>
                    <View style={styles.IdolContainer}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <Text style={styles.textstyle}>Idol Contest</Text>
                            <Text style={styles.textstyle}>Entry</Text>
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                                <Text style={{ color: "white" , fontSize:10 , }}>prize pool</Text>
                                <Text style={styles.textstyle}>Rs. 10,000</Text>
                            </View>
                            <Text style={styles.textstyle}>5 Winners</Text>
                            <Text style={{ color: "black", backgroundColor: "#0BFEBC", padding:6 ,borderRadius:10 , }}>Rs. 1,000</Text>
                        </View>
                        <View style={{ width:150 ,height:5 , backgroundColor: "#0BFEBC" ,left:100 , top:30 , borderRadius: 10}}>
                        <View style={{ position:"absolute",width:100 ,height:5, backgroundColor: "red" ,left:100 , top:30 ,}}></View>

                        </View>
                    </View>
                    <View style={styles.TimeDate}>
                        <Text style={{ color: "white" ,borderRadius: 10  , fontFamily: 'Poppins',}}>st Oct 2021 to 3rd oct 2021</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CryptoDetail")}
                >
                <View style={styles.IdolConte}>
                    <View style={styles.IdolContainer}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <Text style={styles.textstyle}>Idol Contest</Text>
                            <Text style={styles.textstyle}>Entry</Text>
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                                <Text style={{ color: "white" , fontSize:10 , }}>prize pool</Text>
                                <Text style={styles.textstyle}>Rs. 10,000</Text>
                            </View>
                            <Text style={styles.textstyle}>5 Winners</Text>
                            <Text style={{ color: "black", backgroundColor: "#0BFEBC", padding:6 ,borderRadius:10 , }}>Rs. 1,000</Text>
                        </View>
                        <View style={{ width:150 ,height:5 , backgroundColor: "#0BFEBC" ,left:100 , top:30 , borderRadius: 10}}>
                        <View style={{ position:"absolute",width:100 ,height:5, backgroundColor: "red" ,left:100 , top:30 ,}}></View>

                        </View>
                    </View>
                    <View style={styles.TimeDate}>
                        <Text style={{ color: "white" ,borderRadius: 10  , fontFamily: 'Poppins',}}>st Oct 2021 to 3rd oct 2021</Text>
                    </View>
                </View>
                </TouchableOpacity>
                </ScrollView> 
                </View>
    )
}

export default Contest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1F1D2B",

    },
    shadow: {
        shadowColor: "#252837",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    Header: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden',
        width: 380,
        height: 630,
        borderRadius: 15,
        backgroundColor: "#2F313E"
    },
    scroller: {
        flex: 1,
      
    },
    IdolConte: {
        height: 180,
        width: 360,
        backgroundColor: "#1F1D2B",
        margin: "4%",
        borderRadius: 10,
        padding: 5,
    },
    TimeDate: {
        width: 350,
        height: 30,
        backgroundColor: "#252837",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    IdolContainer: {
        position: "relative",
        width: 350,
        height: 140,
    },
    textstyle: {
        fontFamily: 'Poppins',
        color: "white",
        fontSize:16,
        fontWeight: 'bold',
    },

    // My Home menue
    Mycontestmenu:{
        position: "relative",
        justifyContent:"space-around",
        flexDirection: "row",
        width: 380,
        height: 60,
        backgroundColor: "#252837",
    },
    ActiveMycontest:{
        flex: 1,
       width: 120,
       borderTopRightRadius: 15,
       borderTopLeftRadius: 15,
        backgroundColor: "#0BFEBC", 
        margin:2,
    },
    InactiveMycontest:{
        flex: 1,
       width: 120,
       borderTopRightRadius: 15,
       borderTopLeftRadius: 15,
        backgroundColor: "#252837", 
        margin:2,
    },
    MycontestText:{ 
    top:18 ,
    left:24,
    color:"black",
    fontFamily: 'Poppins',
    fontSize:15,
    fontWeight: 'bold',
}
})
