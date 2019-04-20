<template>
  <v-app light>
    <v-toolbar
            :clipped-left="clipped"
            fixed
            app
    >
      <nuxt-link :to="'/'">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-if="logged">
          <div class="user-holder">
            <p>Hello {{ currentUser }}</p>
          </div>
          <v-btn flat @click="logOut">Log out
            <v-icon>directions_run</v-icon>
          </v-btn>
        </template>
        <template v-else>
          <v-btn flat @click="toggleLogin">Login
            <v-icon>fingerprint</v-icon>
          </v-btn>
          <v-btn flat @click="toggleSignUp">Sign up
            <v-icon>account_circle</v-icon>
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
            :fixed="fixed"
            app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        clipped: false,
        fixed: false,
        right: true,
        title: 'Forum',
        isLogged: false
      }
    },
    methods: {
      ...mapMutations([
        'toggleSignUp',
        'toggleLogin',
        'loggedUser',
        'setUser'
      ]),
      logOut(){
        this.loggedUser(false);
        this.setUser('');
        this.toggleLogin()
      }
    },
    computed: {
      logged() {
        return this.$store.state.isLogged
      },
      currentUser() {
        return this.$store.state.user;
      }
    }
  }
</script>

<style scoped>
  .user-holder{
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .user-holder p{
    margin: 0;
  }
</style>
