import { ActivityIndicator, Text, View, Modal, StyleSheet } from "react-native";

import React from "react";

export default function Loader(props) {
    return props.loading ? (
        <Modal transparent={true} visible={true}>
            <View style={styles.container}>
                <View style={styles.spinnerView}>
                    <Text style={{ marginBottom: 10 }}>Please wait</Text>
                    <ActivityIndicator />
                </View>
            </View>
        </Modal>
    ) : (
        <View />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        // backgroundColor: "#ecf0f1",
        // opacity:0.6,
        // width:"100%"
    },
    spinnerView: {
        backgroundColor: "#FFFFFF",
        height: 100,
        width: 100,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 2.0,
        alignSelf: "center",
    },
});
