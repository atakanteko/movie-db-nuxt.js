<template>
  <div>
    <SearchForm />
    <Home />
  </div>
</template>

<script>
import Home from '~/components/Home';
import SearchForm from '~/components/SearchForm';

export default {
  name: 'IndexPage',
  components: {
    Home,
    SearchForm,
  },

};
</script>
