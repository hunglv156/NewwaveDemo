import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import HeaderTitle from '../../components/Header';
import ItemMovie from '../../components/ItemMovie';

export const MovieScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=26763d7bf2e94098192e629eb975dab0&page=1',
      );
      const json = await response.json();
      console.log(json.results);
      setData(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({item, index}) => {
    return <ItemMovie item={item} index={index} />;
  };

  return (
    <View style={styles.container}>
      <HeaderTitle />
      <Text style={{paddingTop: 20, fontSize: 22, fontWeight: '700'}}>
        Popular list
      </Text>
      <View style={{flex: 1, marginBottom:10}}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
