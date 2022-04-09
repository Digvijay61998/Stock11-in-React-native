import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


export const COLORS = {
    primary: "#FFFF",     // background Color
    secondary: "#0C2F81",   // Dark purple
    white:"#FFFF", //white
    FaintWhite:"#3b5eac", //white color
    ActiveWhite:"#93c4ef",//light blue
    lightBlack:"#9d9d9d",  //light black


    ActiveButton:"#295597",  //button color
    black:"black",  // blackColor:"#"
    white:"white",  //white
    HeaderBackground:"#252837",  //headerBackground
    LSFS:"#4D4D59",
    backgroundColor:"linear-gradient(red, yellow)"
    
};

export const contestContainer={
    height: 180,
    width: width-50,
    // backgroundColor: "#1F1D2B",
    marginBottom:35,
    borderRadius: 10,
    padding: 5,
    elevation:3,
  };
export const  Header ={
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    width:width-20,
    height: height-150,
    borderTopRightRadius:20,
    borderTopLeftRadius: 20,
    paddingTop:0,
};

export const container ={
    flex:1,
    alignItems:"center",
    justifyContent:"center",
};

export const CardBox={
  
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
};
export const FONTS = {
    textstyle: {fontFamily: 'lato',color: "black",fontSize:16,fontWeight: 'bold',},
    ItsLiveFont: {fontFamily: 'lato',color: "#25BC20",fontSize:16,fontWeight: 'bold',},
    button:{  width:150,height:35,borderRadius:40,backgroundColor:"#295597" ,elevation:1,alignItems: "center",justifyContent:"center"},
    
    
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
