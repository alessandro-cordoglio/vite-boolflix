<script>
import axios from 'axios'
import { store } from "./store"

import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getData(){
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'e1a9bf61d337fd6893f6391c4a061bc8',
          query: this.store.TextToSearch,
          language: 'it-IT',
        },
      }).then((response)=>{
        this.store.movies = response.data.results
      })
    }
  },
}
</script>

<template>
  <div>
    <header>
      <AppHeader
      class="p-2"
      @performSearch="getData"/>
    </header>
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
