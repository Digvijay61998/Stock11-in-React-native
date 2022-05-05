import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import {icons} from "../../../constants"


export function ImagePickerAvatar({ uri, onPress }) {
  return (
    <View
      style={styles.imageBackground}
      >
      <View >
        <Image
          style={styles.avatarImage}
          source={uri ? { uri } : icons.avatar}
        />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Image style={styles.addButtonIcon} source={icons.addButtonn} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width:100,
    height:100
  },
  avatarImage: {
    height: "100%",
    width: "100%",
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  addButton: {
    height:1,
    width: 1,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  addButtonIcon: {
    height:24,
    width: 24,
  },
  usernameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
  },
});
