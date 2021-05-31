import React from 'react';
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

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {moviesNow, loading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            data={moviesNow}
            renderItem={({item}: any) => <Card movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        {/* peliculas populares */}
        <View style={{height: 260}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Populares</Text>
          <FlatList
            data={moviesNow}
            renderItem={({item}: any) => (
              <Card movie={item} height={200} width={140} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
