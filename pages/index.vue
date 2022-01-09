<template>
  <div>
    <h2>Movie DB Nuxt.js App</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters('movie', ['getApi']),
  },
  mounted() {
    console.log(this.getApi);
  },
};
</script>
