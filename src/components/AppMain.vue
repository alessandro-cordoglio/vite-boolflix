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
    <section class="movies">
        <div class="category">
            <h2 class="text-white">MOVIES</h2>
        </div>
        <div class="card_container pt-5">
            <AppCard v-for="movie in store.movies" :info="movie"/>
        </div>
    </section>
    <section class="tv_series">
        <div class="category">
            <h2 class="text-white">SERIE TV</h2>
        </div>
        <div class="card_container pt-5">
            <AppCard v-for="tv in store.tv" :info="tv"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .card_container{
        display: flex;
        overflow-x: auto;
    }
    .movies, .tv_series{
        padding-top: 40px ;
        .category{
            background-color: rgba(187, 25, 25, 0.842);
            padding: 20px;
            h2{
                font-size: 40px;
            }
        }
        

    }
</style>