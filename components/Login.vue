<template>
    <v-layout row wrap>
        <v-flex xs3/>
        <v-flex xs6>
            <h1>Login</h1>
            <v-form ref="form">
                <v-text-field
                        v-model="email"
                        label="E-mail"
                        required
                        :rules="emailRules"
                ></v-text-field>
                <v-text-field
                        v-model="password"
                        :type="'password'"
                        label="Password"
                        required
                        :rules="passwordRules"
                ></v-text-field>
                <v-btn color="success" @click="submit">
                    Login
                </v-btn>
                <v-alert
                        v-model="alert"
                        type="error"
                        dismissible
                >
                    User not found
                </v-alert>
            </v-form>
        </v-flex>
        <v-flex xs3/>
    </v-layout>
</template>

<script>
    import { mapMutations } from 'vuex';
    import axios from '~/plugins/axios';

    export default {

        data: () => ({
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 5 || 'Minimum password length is 5 characters'
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            password: '',
            email: '',
            alert: false
        }),

        methods: {
            ...mapMutations([
                'toggleLogin',
                'loggedUser',
                'setUser'
            ]),
            async submit() {
                if(this.$refs.form.validate()){
                    const response = await axios.get('/users');
                    const data = await response.data;
                    const user = data.filter((item) => item.password == this.password && item.email == this.email);
                    if(user.length) {
                        this.$refs.form.reset();
                        this.name = '';
                        this.password = '';
                        this.email = '';
                        this.setUser(user[0].name);
                        this.loggedUser(true);
                        this.alert = false;
                        this.toggleLogin();
                    } else {
                        this.alert = true
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
