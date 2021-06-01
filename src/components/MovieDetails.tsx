/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterfaces';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({cast, movieFull}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text>{movieFull.release_date}</Text>
        {/* details */}
        <View style={styles.details}>
          <Icon color="gray" name="star-outline" size={16} />
          <Text style={{marginLeft: 5}}>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* history */}
        <Text style={styles.title}>Historia</Text>
        <Text style={styles.text}>{movieFull.overview}</Text>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.text}>
          {currencyFormatter.format(movieFull.budget, {code: ' USD'})}
        </Text>
      </View>

      <View style={{...styles.container, marginTop: 100}}>
        <Text style={styles.title}>Actores</Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{margin: 10, height: 80}}
        />
      </View>
    </>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  details: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});
