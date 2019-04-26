<template>
    <div>
        <div class="form-holder" v-if="formSignup">
            <Signup/>
        </div>
        <div class="form-holder" v-if="formLogin">
            <Login/>
        </div>
        <nuxt-link to="/category">About (internal link that belongs to the Nuxt App)</nuxt-link>
        <TopicList :posts="posts"/>
    </div>
</template>

<script>
    import Signup from '~/components/Signup.vue';
    import Login from '~/components/Login.vue';
    import TopicList from '~/components/TopicList.vue';
    import axios from '~/plugins/axios';

    export default {
        data(){
            return{
                posts: [],
                title: []
            }
        },
        components: {
            Signup,
            Login,
            TopicList
        },
        async asyncData(context) {
            console.log(context);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = response.data;
            return {posts}
        },
        computed: {
            formSignup() {
                return this.$store.state.signUp
            },
            formLogin() {
                return this.$store.state.login
            }
        }
    }
</script>
