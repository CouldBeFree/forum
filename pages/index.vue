<template>
  <div>
    <div class="form-holder" v-if="formToggle">
      <Signup/>
    </div>
  </div>
</template>

<script>
  import Signup from '~/components/Signup.vue';

  export default {
    components: {
      Signup
    },
    computed: {
      formToggle() {
        return this.$store.state.signUp
      }
    }
  }
</script>
