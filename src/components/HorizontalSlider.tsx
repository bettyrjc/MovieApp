import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';
import Card from './Card';

interface Props {
  title?: string;
  movies: Movie[];
}
const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: 260}}>
      <Text style={{fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>
        {title}
      </Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <Card movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
