<script>
import CountryFlag from 'vue-country-flag-next'
    export default {
        components:{
            CountryFlag,
        },
        props:{
            info: Object,
        },
        methods:{
            getFlag(lang){
                if(lang=='en'){
                    return "us"
                }
                else if(lang=='ja'){
                    return "jp"
                }else{
                    return lang
                }
            }
        },
        computed:{
            vote(){
                return Math.ceil(this.info.vote_average / 2)
            }
        }
    }
</script>

<template>
        <div class="my_card">
            <img :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`" alt="">
            <div class="card_info">
                <div class="absolute">
                    <h3>{{(info.title || info.name)}}</h3>
                    <h4>{{(info.original_title || info.original_name)}}</h4>
                    LANGUAGE: <country-flag :country="getFlag(info.original_language)" size='medium'/>
                    <h5>VOTO: {{vote}}</h5>
                    <font-awesome-icon v-for="n in vote" icon="fa-solid fa-star"/>
                    <font-awesome-icon v-for="n in 5 - vote" icon="fa-regular fa-star"/>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .card_info{
        display: none;
        position: relative;
        .absolute{
            position: absolute;
            height: 100%;
            color: white;
            bottom: 470px;
            padding: 20px;
        }
    }
    .my_card{
        img{
            height: 100%;
            object-fit: cover;
        }
        &:hover .card_info{
            display: block;
        }
        &:hover img{
            filter: brightness(0.2);
        }
    }
</style>