<script>
import AppCard from './AppCard.vue';
import { store } from "../store";
    export default {
        components:{
            AppCard
        },
        data(){
            return{
                store,
            }
        },
    }
</script>

<template>
    <div class="my_container">
        <AppCard v-for="movie in store.movies" :info="movie"/>
    </div>
</template>

<style lang="scss" scoped>

</style>