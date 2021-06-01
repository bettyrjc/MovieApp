import {useEffect, useState} from 'react';
import movieDB from '../api/moviesBD';
import {MovieFull} from '../interfaces/movieInterfaces';
import {CreditsMovie, Cast} from '../interfaces/creditsInterface';

interface MoviesDetails {
  isLoading: boolean;
  cast: Cast[];
  movieFull?: MovieFull[];
}
export const useMoviesDetails = (movieId: number) => {
  const [state, setState] = useState<MoviesDetails[]>({
    cast: [],
    isLoading: true,
    movieFull: undefined,
  });

  const getMoviesDetails = async () => {
    const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsMovie>(`/${movieId}/credits`);

    const [movieDetailResp, castResp] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);
    setState({
      isLoading: false,
      movieFull: movieDetailResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMoviesDetails();
  }, []);

  return {
    ...state,
  };
};
