import axios from 'axios';
import {
  SET_LOADING, SET_QUERY, SET_MOVIES, SET_ERROR, SET_SINGLE_MOVIE,
} from '~/store/types';

export const state = () => ({
  api: `https://www.omdbapi.com/?apikey=${process.env.NUXT_APP_MOVIE_API_KEY}`,
  loading: false,
  error: {
    show: false,
    msg: '',
  },
  movies: [],
  query: 'harry',
  noImages: process.env.NO_PICTURE_IS_AVAILABLE,
  movie: {},
});

export const getters = {
  getApi: state => state.api,
  getMovies: state => state.movies,
  getLoading: state => state.loading,
  getMyQuery: state => state.query,
  getNoAvailableImage: state => state.noImages,
  getError: state => state.error,
  getMovie: state => state.movie,
};

export const actions = {
  fetchSingleMovie: async (context, id) => {
    context.commit(SET_LOADING, true);
    try {
      const singleMovie = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.NUXT_APP_MOVIE_API_KEY}&i=${id}`);
      const {
        Poster: poster, Title: title, Plot: plot, Year: year,
      } = singleMovie.data;
      context.commit(SET_SINGLE_MOVIE, {
        poster, title, plot, year,
      });
      context.commit(SET_LOADING, false);
    } catch (error) {
      console.log(error);
    }
  },
  fetchMovies: async (context, query) => {
    context.commit(SET_LOADING, true);
    try {
      const response = await axios.get(`${context.getters.getApi}&s=${query}`);
      if (response.data.Response === 'True') {
        context.commit(SET_MOVIES, response.data.Search);
        context.commit(SET_ERROR, { show: false, msg: '' });
        context.commit(SET_LOADING, false);
      } else {
        context.commit(SET_ERROR, { show: true, msg: response.data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  },
  setMovies: (context, movies) => {
    context.commit(SET_MOVIES, movies);
  },
  setLoading: (context, loadingStatus) => {
    context.commit(SET_LOADING, loadingStatus);
  },
  setQuery: (context, query) => {
    context.commit(SET_QUERY, query);
  },
  setError: (context, error) => {
    context.commit(SET_ERROR, error);
  },
};

export const mutations = {
  [SET_LOADING](state, loadingStatus) {
    state.loading = loadingStatus;
  },
  [SET_QUERY](state, query) {
    state.query = query;
  },
  [SET_MOVIES](state, movies) {
    state.movies = movies;
  },
  [SET_ERROR](state, { show, msg }) {
    state.error = { ...state.error, show, msg };
  },
  [SET_SINGLE_MOVIE](state, {
    poster, title, plot, year,
  }) {
    state.movie = {
      ...state.movie, poster, title, plot, year,
    };
  },
};
