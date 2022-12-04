<script>
import { store } from "../store";
    export default {
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="logo">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="header_input">
            <form @submit.prevent="$emit('performSearch')">
                <input type="text" placeholder="fai una ricerca"  v-model="store.textToSearch" required>
                <button type="submit">Cerca</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .logo{
        color: red;
        h1{
            font-size: 50px;
        }
    }
    .header_input{
        input{
            padding: 10px;
            width: 70%;
            font-size: 18px;
            font-weight: bold;
        }
        button{
            padding: 13px;
        }
    }
</style>