import React from "react";
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container, SIZES, images} from "../../constants"
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList,Image} from 'react-native'

const PayByWallet = ({navigation}) => {
    return (
      <LinearGradient
      colors={['#93d5ce', '#11a99d','#5700AD','#7e72c5' ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={{flexDirection:"row",justifyContent:"space-between",top:-50,alignItems:"center"}}>
      <View >
      <Image
                  source={images.profile}
                    resizeMode="contain"
                      style={{
                            width:80,
                             height:60,

                                    }}/>
      </View>
      <View>
       <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 90,
           height: 90,
          
 }}
  />
  </View>
  </View>
      <Text style={{fontWeight:"bold",color:"white",marginBottom:30}}>PAY BY WALLET</Text>
         <View style={{elevation:10 ,width:SIZES.width-50,minHeight:100,backgroundColor: COLORS.primary,justifyContent:"center",alignItems: "center",padding:25,paddingTop:100,borderRadius:20}}>
             <View style={{justifyContent:"flex-start",alignItems:"center",flexDirection:"column",top:-80,paddingBottom:25}}>
        <View style={styles.paymentCard}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between" }}>
            <View style={{display:"flex",flexDirection:"column",marginLeft:20,paddingTop:10}}>
             <Text style={{color:"black"}}>Deposit Wallet</Text>
             <Text style={{color:"black"}}>Balance:123.00/-</Text>
            </View>
            <View style={{padding:10}}>
            <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#2432ad',
      }, 
      // props.style
      ]}>
        {
          // props.selected ?
            <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,  
              backgroundColor: '#2432ad',
            }}/>
            // : null
        }
      </View>
            </View>
           
            
           
            </View>
            <View style={{width:100, height:300  ,borderColor:"#ebe7ec",display:"flex",flexDirection:"row",paddingTop:10,justifyContent:"space-between"}}>
              <View style={{padding:12}}>
              <TouchableOpacity style={[FONTS.button,{width:130 }]}
           onPress={() =>
            navigation.navigate('SelectPayment')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"white",fontSize:14}]}>Pay Rs.1000/-</Text>
       </TouchableOpacity>
              </View>
       <View  style={{padding:12}}>
       <TouchableOpacity style={[FONTS.button,{backgroundColor:"#4caea7",width:130}]}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"white",fontSize:14}]}>ADD MONEY</Text>
       </TouchableOpacity>
       </View>
       
            </View>
            
        </View>
      </View>

      <View style={{justifyContent:"flex-start",alignItems:"center",flexDirection:"column",top:-80,paddingBottom:25}}>
        <View style={styles.paymentCard}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between" }}>
            <View style={{display:"flex",flexDirection:"column",marginLeft:20,paddingTop:10}}>
             <Text style={{color:"black"}} >Winning Wallet</Text>
             <Text style={{color:"black"}}>Balance:123.00/-</Text>
            </View>
            <View style={{padding:10}}>
            <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#2432ad',
      },
      //  props.style
      ]}>
        {
          // props.selected ?
            <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#2432ad',
            }}/>
            // : null
        }
      </View>
            </View>
           
            
            </View>
            <View style={{width:100, height:300  ,borderColor:"#ebe7ec",display:"flex",flexDirection:"row",paddingTop:10,justifyContent:"space-between"}}>
              <View style={{padding:12}}>
              <TouchableOpacity style={[FONTS.button,{width:130 }]}
           onPress={() =>
            navigation.navigate('SelectPayment')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"white",fontSize:14}]}>Pay Rs.1000/-</Text>
       </TouchableOpacity>
              </View>
       <View  style={{padding:12}}>
       <TouchableOpacity style={[FONTS.button,{backgroundColor:"#4caea7",width:130}]}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"white",fontSize:14}]}>ADD MONEY</Text>
       </TouchableOpacity>
       </View>
       
            </View>
        </View>

        
      </View>
      <View style={{justifyContent:"flex-start",alignItems:"center",flexDirection:"column",top:-80,}}>
        <View style={styles.paymentCard}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between" }}>
            <View style={{display:"flex",flexDirection:"column",marginLeft:20,paddingTop:10}}>
             <Text style={{color:"black"}}>Bonus Wallet</Text>
             <Text style={{color:"black"}}>Balance:123.00/-</Text>
            </View>
            <View style={{padding:10}}>
            <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#2432ad',
      },
      //  props.style
       ]}>
        {
          // props.selected ?
            <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#2432ad',
            }}/>
            // : null
        }
      </View>
            </View>
           
            </View>
            <View style={{width:100, height:300  ,borderColor:"#ebe7ec",display:"flex",flexDirection:"row",paddingTop:10,justifyContent:"space-between"}}>
              <View style={{padding:12}}>
              <TouchableOpacity style={[FONTS.button,{width:130 }]}
           onPress={() =>
            navigation.navigate('SelectPayment')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"white",fontSize:14}]}>Pay Rs.1000/-</Text>
       </TouchableOpacity>
              </View>
       <View  style={{padding:12}}>
       <TouchableOpacity style={[FONTS.button,{backgroundColor:"#4caea7",width:130}]}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"white",fontSize:14}]}>ADD MONEY</Text>
       </TouchableOpacity>
       </View>
       
            </View>
        </View>
      </View>
        
      </View>
      </LinearGradient>
    );
  };
  
  export default PayByWallet;
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
  },
  paymentCard:{width:300,height:120,
    backgroundColor:"white",
    borderColor:"grey",
    borderRadius:15,
    elevation:10,
    top:30
},
radiobutton:{
  height: 25,
  width: 25,
  backgroundColor:" black",
  borderRadius: "50%",
  borderColor:"black",
}

    
   
  });
  