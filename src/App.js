
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {MovieScreen} from './screen/movie/movie-screen'

const App = () => {
  return (
    <View style={styles.container}>
      <MovieScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});




export default App;
