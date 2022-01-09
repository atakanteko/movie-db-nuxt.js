<template>
  <main>
    <SearchForm />
    <Movies />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchForm from '~/components/SearchForm';
import Movies from '~/components/Movies';

export default {
  name: 'IndexPage',
  components: {
    Movies,
    SearchForm,
  },
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
