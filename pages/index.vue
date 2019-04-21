<template>
    <div>
        <div class="form-holder" v-if="formSignup">
            <Signup/>
        </div>
        <div class="form-holder" v-if="formLogin">
            <Login/>
        </div>
        <TopicList/>
    </div>
</template>

<script>
    import Signup from '~/components/Signup.vue';
    import Login from '~/components/Login.vue';
    import TopicList from '~/components/TopicList.vue';

    export default {
        components: {
            Signup,
            Login,
            TopicList
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
