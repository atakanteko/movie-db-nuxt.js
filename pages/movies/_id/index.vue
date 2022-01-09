<template>
  <div>
    <SingleMovie :movie-info="getMovie" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SingleMovie from '~/components/SingleMovie';

export default {
  components: {
    SingleMovie,
  },
  computed: {
    ...mapGetters('movie', ['getMovie']),
  },
  mounted() {
    this.fetchMovie(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchMovie: 'movie/fetchSingleMovie',
    }),
  },

};
</script>
