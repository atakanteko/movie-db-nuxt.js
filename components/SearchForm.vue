<template>
  <form class="search-form" @submit.prevent>
    <h2>search movies</h2>
    <input v-model="searchTerm" type="text" class="form-input">
    <div v-if="getError" class="error">
      {{ getError.msg }}
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {
    ...mapGetters('movie', ['getError']),
  },
  watch: {
    searchTerm() {
      if (this.searchTerm.length === 0) {
        this.fetchMovie('batman');
      } else {
        this.fetchMovie(this.searchTerm);
      }
    },
  },
  methods: {
    ...mapActions({
      fetchMovie: 'movie/fetchMovies',
    }),
  },

};
</script>
