<template>
  <div class="movies">
    <div v-if="getLoading" class="loading" />
    <section v-for="(item, index) in getMovies" v-else :key="index" class="rel-mov">
      <nuxt-link :to="{name: 'movies-id', params: { id:item.imdbID } }">
        <article>
          <img v-if="item.Poster === 'N/A'" :src="getNoAvailableImage" :alt="item.Title">
          <img v-else :src="item.Poster" :alt="title">
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      getNoAvailableImage: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png',
    };
  },
  computed: {
    ...mapGetters('movie', ['getMovies', 'getLoading']),
  },
};
</script>
