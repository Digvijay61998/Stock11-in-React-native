import React from 'react'
import { StyleSheet, Text, View ,useWindowDimensions} from 'react-native'

const Contest = ({item}) => {

    const {width} = useWindowDimensions();

    return (
        <View style={[styles.container,{width}]}>
            <Text>
                dsk
            </Text>
            <Text>
                dsk
            </Text>
            <Text>
                dsk
            </Text>
            <Text>
                dsk
            </Text>
        </View>
    )
}

export default Contest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#1F1D2B",
    },
})
