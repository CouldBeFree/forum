<template>
    <v-layout row wrap>
        <v-flex xs3/>
        <v-flex xs6>
            <h1>Sign up</h1>
            <v-form ref="form">
                <v-text-field
                        v-model="name"
                        :counter="20"
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
                        :counter="20"
                        label="Password"
                        required
                        :rules="passwordRules"
                ></v-text-field>
                <v-btn
                        color="error"
                        @click="reset"
                >
                    Reset Form
                </v-btn>

                <v-btn
                        color="warning"
                        @click="toggleSignUp"
                >
                    Close form
                </v-btn>
                <v-btn
                        @click="submit"
                >
                    Submit
                </v-btn>
            </v-form>
        </v-flex>
        <v-flex xs3/>
    </v-layout>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {

        data: () => ({
            nameRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            passwordRules: [
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
            submit () {
                // this.$v.$touch();
                if(this.$refs.form.validate()){
                    alert('Valid')
                }
            }
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>
