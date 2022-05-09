import React, {memo} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const ItemMovie = ({item, index}) => {
  const getYear = date => {
    const dataFormat = new Date(date);
    return dataFormat.getFullYear();
  };

  const image =
    'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg';
  return (
    <View key={index} style={styles.container}>
      <ImageBackground
        source={{uri: image}}
        style={styles.imageBackground}
        imageStyle={{borderRadius: 10}}
        resizeMode={'contain'}>
        <View style={styles.body}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{item.vote_average}</Text>
          </View>
          <View style={styles.movie}>
            <Text style={styles.textVote}>{getYear(item.release_date)}</Text>
            <Text style={styles.textTitle}>{item.title}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 8,
  },
  imageBackground: {
    width: 160,
    height: 250,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#000000',
    elevation: 10,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  circle: {
    backgroundColor: 'green',
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  circleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  movie: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textVote: {
    color: 'white',
    fontWeight: '400',
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default memo(ItemMovie);
