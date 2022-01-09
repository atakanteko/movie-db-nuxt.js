<template>
  <div>
    <div v-if="getLoading" class="loading" />
    <section v-else class="single-movie">
      <img :src="movieInfo.poster" :alt="movieInfo.title">
      <div class="single-movie-info">
        <h2>{{ movieInfo.title }}</h2>
        <p>{{ movieInfo.plot }}</p>
        <h4>{{ movieInfo.year }}</h4>
        <nuxt-link to="/" class="btn">
          Back to home
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    movieInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('movie', ['getLoading']),
  },
};
</script>
