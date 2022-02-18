import React, { useState } from 'react';
import { Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { CardBox, COLORS, FONTS, icons } from '../../constants';
import { basketDetails } from '../../constants/dummy';
const Confirmation = ({ title, isVisible,navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
return (
<View styles={{justifyContent:"center",alignItems:"center"}}>
 <Modal animationType='fade'  visible={modalVisible}
 onRequestClose={() => {
    Alert.alert("Modal has been closed.");
    setModalVisible(!modalVisible);
  }}
 >
 <View style={[CardBox,styles.CardBoxStyle]}>
        <View style={styles.IdolContainer}>
            <View style={styles.headTitle}>
                <View style={{paddingRight:70}}>
                <Text style={{fontSize:25,color:"white",fontWeight:"bold"}}>Confirmation</Text>

                </View>
                <Pressable>
                <Image
                     source={icons.cross}
                     resizeMode="contain"
                    style={{
                     width: 30,
                     height: 30,
                      top:8
                    // tintColor: focused ? COLORS.
                    //     ActiveButton : COLORS.black
                                    }}
                                />
                </Pressable>
               
                
            </View>
            </View>
            <View>
            
           
           <View styles={{flex:1,flexDirection:"column"}}>
            <View style={{display:"flex",flexDirection:"row",position:'relative',width:"100%",justifyContent:'space-between'}}>
                <Text style={{color:"white",paddingLeft:25}}>Available balance</Text>
                <Text style={{color:"white",paddingRight:25}}>Rs.2,000</Text>
            </View>

            <View style={{display:"flex",flexDirection:"row",position:'relative',width:"100%",justifyContent:'space-between',paddingTop:6}}>
                <Text style={{color:"white",paddingLeft:25}}>Entery Fee</Text>
                <Text style={{color:"white",paddingRight:25}}>Rs.2,000</Text>
            </View>
            </View>
        </View>
        <View style={{alignItems:"center",paddingTop:25}}>
        <TouchableOpacity style={[FONTS.button, { width: 150,marginRight: 20 }]}
                    onPress={() =>
                        navigation.navigate('Current Balance')
                    }
                >
                    <Text style={[FONTS.textstyle, { color:COLORS.primary  }]}>Join Contest</Text>
                </TouchableOpacity>
        </View>
    </View>
  </Modal>
 </View>
 );
};
const styles = StyleSheet.create({
    CardBoxStyle:{ 
        backgroundColor:COLORS.primary,
         elevation: 5 ,
          borderRadius: 10,
           overflow: "hidden",
    },
    
    
    headTitle:{
        justifyContent: "flex-end", 
        flexDirection: "row",
         padding: 6,
         backgroundColor:COLORS.HeaderBackground , 
         right: 5 , bottom:5,
         width: 360,
         height:50,
         borderBottomWidth :2,
         borderBottomColor: "#383945",
       },
     

});
export default Confirmation;