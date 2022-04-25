import { StyleSheet, Text, View ,Image,ProgressBarAndroid,AsyncStorage} from 'react-native';
import React ,{useState,useEffect} from 'react';
import { COLORS, FONTS, icons ,Header ,CardBox,SIZES} from "../constants/index"
import { TouchableOpacity } from 'react-native-gesture-handler';
import routes from '../../utils/routes';
const IdolContest = ({data}) => {
    const [pin, setPin] = useState([]);
    const [getPined , setGetpined] = useState([]); 
  console.log("pin!!!!!!!~~~~~>",pin);

    const handlepined = async(data) => {
        const userKey = await AsyncStorage.getItem('userKey');
        const user_key=  parseInt(userKey)
      console.log("item==========",typeof user_key);
      if (pin.includes(data.contestKey)) {
        const newPoint = pin.filter((itemId) =>
          itemId !== data.contestKey);
          let Body = {
            contest_key: data.contestKey,
            user_key:user_key
        }
        DaleteContestdetails(Body)
        return setPin(newPoint)
      }
      else{
        setPin([...pin,data.contestKey]);

        let Body = {
            contest_key: data.contestKey,
            createdBy: "toghgom",
            user_key:user_key
        }
        CreatePinContest(Body)
      }
    }

    const GetPinContest = async () => {
        const userId = await AsyncStorage.getItem('userId');
        console.log("calling GetPinContest api=====>");
        try {
            const parsedResponse = await routes.STOCK_11.APIS.GET_PIN_CONTEST(`${userId}`);
            for (let i = 0; i < parsedResponse.length; i++) {
                setPin([parsedResponse[i].contestKey])
              }
            } catch (error) {
            console.log("FAIL=====")
            console.error(error);
        }
        }

    async function CreatePinContest(data) {
        console.log("calling CreatePinContest api=====>",data);
        try {
            const parsedResponse = await routes.STOCK_11.APIS.CREATE_PIN_CONTEST(data);
            console.log("CreatePinContest=====",parsedResponse)

        } catch (error) {
            console.error(error);
        }
      }

      async function DaleteContestdetails(data) {
        console.log("calling DaleteContestdetails api=====>",data);
        try {
            const parsedResponse = await routes.STOCK_11.APIS.DELETE_PIN_CONTEST(data);
            console.log("DaleteContestdetails=====",parsedResponse)
        } catch (error) {
            console.error(error);
        }
      }

      useEffect(() => {
                GetPinContest();
              }, [])

  return (
    <View>
    <View style={styles.IdolContainer}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
            <Text style={{fontSize:19 ,color:"#032F81" ,fontWeight:"bold" ,fontFamily:"lato"}}>{data.contestName}</Text>
            <View></View>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" ,marginTop:-10}}>
            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                <Text style={{ color: "black" , fontSize:23,fontWeight:"bold" }}>WIN Rs.10,000/-</Text>
                <Text style={{ color: "black" , fontSize:17,fontWeight:"bold"}}>ENTRY FEE: Rs.{data.entryFee}/-</Text>
                <Text style={{ color: "#45444" , fontSize:14,fontWeight:"bold"}}>{data.totalWinners} Winners</Text>
           
            </View>
        <View style={{justifyContent:"center",alignItems:"center",marginTop:-20}}>
        <TouchableOpacity 
                     onPress={() => handlepined(data)} key={data.contestKey}
                    >
                       {pin.includes(data.contestKey) ?
                        <Image
                                source={icons.pin}
                                resizeMode="contain"
                                style={{
                                //   position:"absolute",
                                    width: 30,
                                    height: 30,
                                    top: -10,
                                    left: 10

                                }}
                                />:
                              <Image
                                source={icons.unpin}
                                resizeMode="contain"
                                style={{
                                //   position:"absolute",
                                    width: 30,
                                    height: 30,
                                    top: -10,
                                    left: 10

                                }}
                                />}
                                </TouchableOpacity>
        <Image 
            source={icons.IconUsers}
            resizeMode="contain"
            style={{
                width:30,
                height: 30,
               
      }}
            />
            <Text style={{ color:COLORS.secondary, padding:6 ,borderRadius:10 , fontWeight: 'bold',}}>{data.poolSize}</Text>
            <Text style={{ color:COLORS.secondary,borderRadius:10 , fontWeight: 'bold',fontSize:11}}>Bulls</Text>
        </View>
           
        </View>
          <View style={{alignItems:"flex-start",width:220,left:8,top:0,flexDirection:"row"}}>
          <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          style={{width:220}}
          progress={(data.filledSpots / data.totalSpots) ? (data.filledSpots / data.totalSpots) :0}
        //   progress={(data.filledSpots / data.totalSpots) * 10 ? (data.filledSpots / data.totalSpots) * 10 :0}
        />
          {/* <View style={{ width:spots, height: 5, backgroundColor:"#4caea7", borderRadius: 10 }}></View> */}
          {/* <View style={{ width: "50%", height: 5, backgroundColor:COLORS.secondary, borderRadius: 10,right:1 }}></View> */}
          <View style={{ justifyContent: "space-between", flexDirection: "row", width:230}}>
            <Text style={[FONTS.textstyle ,{fontSize:8 }]}></Text>
            <Text  style={[FONTS.textstyle ,{fontSize:10,color:"red"}]}>{data.filledSpots}</Text>
          </View>
          </View>
    </View>
    <View style={styles.TimeDate}>
    <Text style={{ color: "black" ,borderRadius: 10,fontFamily: 'lato',width:200,overflow:"hidden",height:20}}>{data.startDate}-{data.endDate}</Text>
 <Text style={[FONTS.textstyle,styles.view]}>VIEW</Text>
    </View>
</View>
  );
};

export default IdolContest;

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

scroller: {
    flex: 1,
  overflow:"hidden",
},

TimeDate: {
    width: 325,
    height: 30,
    marginTop:4,
    paddingLeft:8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius: 5
},
IdolContainer: {
    position: "relative",
    width: SIZES.width-50,
    height: 140,
},
textstyle: {
    fontFamily: 'lato',
    color: "black",
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
    backgroundColor: COLORS.ActiveButton, 
    margin:2,
},
MycontestText:{ 
top:18 ,
left:24,
color:"black",
fontFamily: 'lato',
fontSize:15,
fontWeight: 'bold',
},
view:{
    backgroundColor:COLORS.secondary,
    color:COLORS.white,
    fontFamily:"bold",
    fontSize:12,
    width:70,
    height:30,
    marginBottom:35,
    paddingTop:6,
    textAlign:"center",
    borderRadius:40
}

})

