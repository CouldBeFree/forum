<template>
    <v-layout row wrap>
        <v-flex xs3/>
        <v-flex xs6>
            <h1>Sign up</h1>
            <v-form ref="form">
                <v-text-field
                        v-model="name"
                        label="Name"
                        required
                        :rules="nameRules"
                ></v-text-field>

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
                <v-btn color="error" @click="toggleSignUp">
                    Close form
                </v-btn>
                <v-btn color="success" @click="submit">
                    Submit
                </v-btn>
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
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 5 || 'Minimum password length is 5 characters'
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            name: '',
            password: '',
            email: ''
        }),

        methods: {
            reset () {
                this.$refs.form.reset()
            },
            ...mapMutations([
                'toggleSignUp'
            ]),
            async submit() {
                const user = {
                    name: this.name,
                    password: this.password,
                    email: this.email
                };
                if(this.$refs.form.validate()){
                    const response = await axios.post('/users', user);
                    console.log(response);
                }
            }
        }
    }
</script>

<style scoped>

</style>
