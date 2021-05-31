import {useEffect, useState} from 'react';
import movieDB from '../api/moviesBD';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterfaces';
export const useMovies = () => {
  const [loading, setLoading] = useState(true);

  const [moviesNow, setMoviesNow] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const movies = resp.data.results;
    setMoviesNow(movies);

    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesNow,
    loading,
  };
};
