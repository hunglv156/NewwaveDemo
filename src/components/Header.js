import React,{memo} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Images} from '../assets/image';

const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack}>
        <Image source={Images.leftArrow} style={styles.iconBack} />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  iconBack: {
    height: 35,
    width: 25,
  },
  buttonBack: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  text: {fontSize: 22, color: 'black', paddingLeft:10},
});

export default memo(HeaderTitle);
