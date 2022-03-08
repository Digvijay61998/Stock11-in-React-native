import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
// import { COLORS, FONTS, icons, Header, CardBox, IdolContest, dummyData, container } from "../../constants"
import React from 'react';
import { COLORS, FONTS, icons, Header, CardBox, IdolContest, dummyData, container } from '../../../constants';

const AboutUs = ({ navigation }) => {
  return (
    <View style={container}>
      <Text style={[FONTS.textstyle,{padding:20 ,color:COLORS.FaintWhite}]}>
        assLorem Ipsum is
        simply dummy text of the prin
        ting and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a g
        alley of type and scrambled it to make a type specime
        n book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining es
        sentially unchanged. It was popularised in the 1960s wi
        th the release of Letraset sheets containing Lorem Ipsu
        m passages, and more recently with desktop publishing so
        ftware like Aldus PageMaker including versions of Lorem
         Ipsum.ddas
         Contrary to popular belief, Lorem Ipsum is not simply random tex
         . It has roots in a piece of classical Latin literature from 45 BC, making i
         t over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
         College in Virginia, looked up one of the more obscure Latin words, consectetur,
          from a Lorem Ipsum passage, and going through the cites of the word in classica
          l literature, discovered the undoubtable source. Lorem Ipsum comes from secti
          ns 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
          and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
           of ethics, very popular during the Renaissance. The first line of Lorem Ips
           um, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          nterested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" b
          y Cicero
          are also reproduced in their exact original form, accompanied by English versi
          ons from the 1914 translation by H. Rackham.



         </Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({});
