<template>
    <div>
        <h1>{{getCategory}}</h1>
        <div class="text-xs-center">
            <v-rating v-model="rating"></v-rating>
        </div>
        <article v-for="item in postItem">
            <h1>{{item.title}}</h1>
            <p>{{item.body}}</p>
        </article>
    </div>
</template>

<script>
    import axios from '~/plugins/axios';

    export default {
        data(){
            return {
                postItem: [],
                rating: 3
            }
        },
        async asyncData({params}){
            const response = await axios.get('/category');
            const posts = response.data;
            return{
                posts,
                params
            }
        },
        methods: {
            getArray(){
                const currentPost = this.posts.filter(item => item.name === this.getCategory);
                console.log(this.params.id);
                this.postItem = currentPost[0].posts.filter(item => item.title ===this.params.id);
            }
        },
        computed: {
            getCategory(){
                return this.$store.state.currentCategory
            }
        },
        created(){
            this.getArray()
        }
    }
</script>

<style scoped>

</style>
