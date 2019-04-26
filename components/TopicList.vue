<template>
    <div>
        <v-list v-for="item in posts">
            <v-list-tile :key="item.id">
                <v-list-tile-content>
                    <nuxt-link :to="'/category/'">Test</nuxt-link>
                </v-list-tile-content>
                <h1>{{item.title}}</h1>
                <button @click="test">Test click</button>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>
    import axios from '~/plugins/axios';

    export default {
        asyncData(context) {
            console.log(context);
            return axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    return {posts: response.data}
                })
        },
        methods:{
            test(){
                axios.get('/category').then(res => {
                    this.category = res.data
                })
            }
        }
    }
</script>

<style scoped>

</style>
