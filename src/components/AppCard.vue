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
                    <div class="d-flex title_">
                        <h4>TITOLO:</h4>
                        <div class="info">
                            {{(info.title || info.name)}}
                        </div>
                    </div>
                    <div class="d-flex original_title align-items-center mt-3 fs-6">
                        <h4 class="me-2">(</h4> {{(info.original_title || info.original_name)}} <h4 class="ms-2">)</h4>
                    </div>
                    <div class="d-flex mt-3">
                        <h4 class="me-3">LANGUAGE:</h4>  <country-flag :country="getFlag(info.original_language)" size='medium'/>
                    </div>
                    <div class="d-flex mt-3 align-items-center">
                        <h4 class="me-3">VOTO:</h4> 
                        <font-awesome-icon v-for="n in vote" icon="fa-solid fa-star"/>
                        <font-awesome-icon v-for="n in 5 - vote" icon="fa-regular fa-star"/>
                    </div>
                    <div class="overview">
                        {{info.overview}}
                    </div>
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
    .info{
        font-size: 17px;
        margin-left: 15px;
    }
    .overview{
        overflow-y: hidden;
    }
</style>