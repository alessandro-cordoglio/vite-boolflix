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
    <form @submit.prevent="$emit('performSearch')">
        <input type="text" placeholder="fai una ricerca"  v-model="store.TextToSearch" required>
        <button type="submit">Cerca</button>
    </form>
</template>

<style lang="scss" scoped>

</style>