<template>
  <div>
    <SingleMovie />
  </div>
</template>

<script>
import axios from 'axios';
import SingleMovie from '~/components/SingleMovie';

export default {
  components: {
    SingleMovie,
  },
  async asyncData({ params }) {
    console.log(params.id);
    console.log(`https://www.omdbapi.com/?apikey=${process.env.NUXT_APP_MOVIE_API_KEY}&i=${params.id}`);
    const singleMovie = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.NUXT_APP_MOVIE_API_KEY}&i=${params.id}`);
    console.log(singleMovie);
  },
};
</script>
