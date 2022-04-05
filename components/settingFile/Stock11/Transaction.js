import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { icons } from '../../../constants';


const Transactions = () => {
    return(
        <LinearGradient 
        colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
           <Image 
       source={icons.Stock11Logo}

       resizeMode="contain"
       style={{
           width: 80,
           height: 80,
           top:-130
 }}
  />

  <View style={styles.ProfileBox}>

  </View>
      </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    ProfileBox:{
        height:400,
        top:5,
        width:"85%",
        backgroundColor:"#f7edf0",
        borderRadius:35,
        alignItems:"center",
        justifyContent:"center",
        elevation:10,
          }
})

export default Transactions;