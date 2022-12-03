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
    <section>
        <h2>MOVIES</h2>
            <AppCard v-for="movie in store.movies" :info="movie"/>
    </section>
    <section>
        <h2>SERIE TV</h2>
            <AppCard v-for="tv in store.tv" :info="tv"/>
    </section>
</template>

<style lang="scss" scoped>

</style>