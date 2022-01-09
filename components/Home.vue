<template>
  <h2>Movie Component</h2>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters('movie', ['getMyQuery']),
  },
  mounted() {
    this.fetchMovies(this.getMyQuery);
  },
  methods: {
    ...mapActions({
      fetchMovies: 'movie/fetchMovies',
    }),
  },
};
</script>
