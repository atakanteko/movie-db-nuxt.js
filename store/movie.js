export const state = () => ({
  api: `https://www.omdbapi.com/?apikey=${process.env.NUXT_APP_MOVIE_API_KEY}`,
});

export const getters = {
  getApi: state => state.api,
};

export const actions = {

};

export const mutations = {

};
