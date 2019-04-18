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
        <template v-if="isLogged">
          <v-btn flat>Log out
            <v-icon>directions_run</v-icon>
          </v-btn>
        </template>
        <template v-else>
          <v-btn flat>Login
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

    export default {
        data() {
            return {
                clipped: false,
                fixed: false,
                right: true,
                title: 'Forum',
                isLogged: false
            }
        }
    }
</script>
