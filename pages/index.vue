<template>
  <div>
    <div class="form-holder" v-if="formSignup">
      <Signup/>
    </div>
    <div class="form-holder" v-if="formLogin">
      <Login/>
    </div>
  </div>
</template>

<script>
  import Signup from '~/components/Signup.vue';
  import Login from '~/components/Login.vue';

  export default {
    components: {
      Signup,
      Login
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
