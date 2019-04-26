<template>
    <div>
        <div class="form-holder" v-if="formSignup">
            <Signup/>
        </div>
        <div class="form-holder" v-if="formLogin">
            <Login/>
        </div>
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
        async asyncData() {
            const response = await axios.get('/category');
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
