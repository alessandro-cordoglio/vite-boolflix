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
                else{
                    return lang
                }
            }
        }
    }
</script>

<template>
    <div class="my_card debug_style">
        <h3>{{info.title}}</h3>
        <h4>{{info.original_title}}</h4>
        <country-flag :country="getFlag(info.original_language)" size='medium'/>
        <h5>{{info.vote_average}}</h5>
        <font-awesome-icon icon="fa-solid fa-star"/>
        <font-awesome-icon icon="fa-regular fa-star"/>
    </div>
</template>

<style lang="scss" scoped>
    .debug_style{
        margin-top: 60px ;
        max-width: max-content;
        border: 1px solid black;
        padding: 20px;
    }
</style>