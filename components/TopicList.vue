<template>
    <v-list>
        <v-list-tile>
            <v-list-tile-content>
                <nuxt-link :to="'/category/'">Test</nuxt-link>
            </v-list-tile-content>
            <h1>Test {{category}}</h1>
            <h1>I am topic list</h1>
            <button @click="test">Test click</button>
        </v-list-tile>
    </v-list>
</template>

<script>
    import axios from '~/plugins/axios';

    export default {
        data () {
            return {
                category: 'Some category'
            }
        },
        asyncData() {
            return axios.get('category')
                .then((res) => {
                    return {category: res.data}
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
