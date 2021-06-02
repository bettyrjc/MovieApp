/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import ImageColors from 'react-native-image-colors';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../hooks/useMovies';
import Card from '../components/Card';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';

import {getColors} from '../helper/getColors';
import {GradientContext} from '../context/gradientContext';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {setColors} = useContext(GradientContext);
  const {now_playing, upcoming, top_rated, popular, loading} = useMovies();
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    if (now_playing.length > 0) {
      getPosterColors(0);
    }
  }, [now_playing]);

  const getPosterColors = async (index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500${now_playing[index].poster_path}`;
    const [primary = 'green', secondary = 'yellow'] = await getColors(uri);
    console.log('primary, secondary', primary, secondary);

    setColors({primary, secondary});
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: 440}}>
            <Carousel
              data={now_playing}
              renderItem={({item}: any) => <Card movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* peliculas populares */}
          <HorizontalSlider title="Popular " movies={popular} />
          <HorizontalSlider title="Top  rated " movies={top_rated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
