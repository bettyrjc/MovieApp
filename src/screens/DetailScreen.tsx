import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, Dimensions, Image, ScrollView, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Movie} from '../interfaces/movieInterfaces';
import {RootStackParams} from '../navigation/Navigation';
import {useMoviesDetails} from '../hooks/useMoviesDetails';
import MovieDetails from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params as Movie;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, movieFull, cast} = useMoviesDetails(movie.id);

  return (
    <ScrollView>
      {/* <View style={{marginTop: top + 20}}> */}
      <View style={styles.containerImg}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.image} />
        </View>
      </View>
      {/* </View> */}
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <View style={styles.marginContainer}>
          <ActivityIndicator color="grey" size={20} />
        </View>
      ) : (
        <MovieDetails cast={cast} movieFull={movieFull!} />
      )}
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.pop()}>
        <Icon
          size={50}
          name="arrow-back-outline"
          color="white"
          
        />
      </TouchableOpacity>

    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  containerImg: {
    width: '100%',
    height: screenHeight * 0.7,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,

    elevation: 9,
    borderBottomEndRadius: 18,
    borderBottomStartRadius: 18,
  },
  image: {
    flex: 1,
  },
  imageBorder: {
    flex: 1,
    borderBottomEndRadius: 18,
    borderBottomStartRadius: 18,
    overflow: 'hidden',
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnBack: {
    position: 'absolute',
    zIndex: 9999,
    elevation:9,
    top: 30,
    left: 5
  },
});
