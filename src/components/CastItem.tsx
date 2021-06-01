/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
interface Props {
  actor: Cast;
}
const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{uri}} style={{width: 50, borderRadius: 5}} />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{actor.name}</Text>
        <Text style={{fontWeight: 'bold', opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: 'red',
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,

    elevation: 6,
    borderRadius: 10,
    marginRight: 30,
    paddingRight: 15,
  },

  actorInfo: {
    marginLeft: 10,
    marginTop: 3,
  },
});
