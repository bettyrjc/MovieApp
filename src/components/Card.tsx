import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}
const Card = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={{width, height, marginHorizontal: 5}}>
      <View style={styles.containerImg}>
        <Image source={{uri}} style={styles.image} />
      </View>
      {/* <Text>{movie.title}</Text> */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    borderRadius: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
