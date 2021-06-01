import {useEffect, useState} from 'react';
import movieDB from '../api/moviesBD';
import {MovieDBNowResponse, Movie} from '../interfaces/movieInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}
export const useMovies = () => {
  const [loading, setLoading] = useState(true);

  const [movies, setMovies] = useState<MoviesState[]>({
    now_playing: [],
    popular: [],
    top_rated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const now_playing = movieDB.get<MovieDBNowResponse>('/now_playing');
    const popular = movieDB.get<MovieDBNowResponse>('/popular');
    const top_rated = movieDB.get<MovieDBNowResponse>('/top_rated');
    const upcoming = movieDB.get<MovieDBNowResponse>('/upcoming');

    const response = await Promise.all([
      now_playing,
      popular,
      top_rated,
      upcoming,
    ]);

    setMovies({
      now_playing: response[0].data.results,
      popular: response[1].data.results,
      top_rated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movies,
    loading,
  };
};
