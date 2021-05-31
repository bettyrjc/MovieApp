import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6f79777ec0c0b88307b6e9ddc74c57c1',
    language: 'es-ES',
  },
});

export default movieDB;
