<template>
    <v-layout row wrap>
        <v-flex xs3/>
        <v-flex xs6>
            <h1>Sign up</h1>
            <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
            >
                <v-text-field
                        v-model="name"
                        :counter="20"
                        :rules="nameRules"
                        label="Name"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="password"
                        :type="'password'"
                        label="Password"
                        required
                ></v-text-field>

                <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                ></v-checkbox>
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
                        :disabled="valid"
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
            valid: true,
            password: '',
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            checkbox: false
        }),

        methods: {
            reset () {
                this.$refs.form.reset()
            },
            ...mapMutations([
                'toggleSignUp'
            ])
        },
        computed: {
            validate () {
                if (this.emailRules && this.checkbox && this.name) {
                    this.valid = true
                }
            },
        }
    }
</script>

<style scoped>

</style>