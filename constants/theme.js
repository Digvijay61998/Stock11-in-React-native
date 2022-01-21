import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#2F313E",     // background Color
    secondary: "#1F1D2B",   // Dark purple
    ActiveButton:"#0BFEBC",  //button color
    Whitetitle:"#fffff", //white color
    black:"#black",  // blackColor:"#"
    HeaderBackground:"#252837"  //headerBackground
    
};

export const  Header ={
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    elevation: 5,
    width: 380,
    height: 630,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#2F313E"
};
export const CardBox={
    height: 180,
    width: 360,
    backgroundColor: "#1F1D2B",
    margin: "4%",
    borderRadius: 10,
    padding: 5,
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
    height
};
export const FONTS = {
    textstyle: {fontFamily: 'Poppins',color: "white",fontSize:16,fontWeight: 'bold',},
    ItsLiveFont: {fontFamily: 'Poppins',color: "#25BC20",fontSize:16,fontWeight: 'bold',},
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
