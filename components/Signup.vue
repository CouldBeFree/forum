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
                        :error-messages="nameErrors"
                        label="Name"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                ></v-text-field>

                <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                ></v-text-field>

                <v-text-field
                        v-model="password"
                        :counter="20"
                        :error-messages="passwordErrors"
                        label="Password"
                        required
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                ></v-text-field>

                <v-checkbox
                        v-model="checkbox"
                        :error-messages="checkboxErrors"
                        label="Do you agree?"
                        required
                        @change="$v.checkbox.$touch()"
                        @blur="$v.checkbox.$touch()"
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
                        :disabled="isValid"
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
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        data: () => ({
            /*password: '',
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
            checkbox: false*/
            valid: false,
            name: '',
            email: '',
            select: null,
            checkbox: false,
            password: ''
        }),

        validations: {
            name: { required, maxLength: maxLength(20) },
            email: { required, email },
            select: { required },
            password: { required },
            checkbox: {
                checked (val) {
                    return val
                }
            }
        },

        methods: {
            reset () {
                this.$refs.form.reset()
            },
            ...mapMutations([
                'toggleSignUp'
            ]),
            submit () {
                this.$v.$touch();
                if(!this.emailErrors.length || !this.nameErrors.length || !this.passwordErrors.length || !this.checkboxErrors.length){
                    alert('Valid')
                }
            },
            clear () {
                this.$v.$reset(),
                    this.name = '',
                    this.email = '',
                    this.password = '',
                    this.checkbox = false
            }
        },
        computed: {
            /*validate () {
                if (this.emailRules && this.checkbox && this.name) {
                    this.valid = true
                }
            }*/
            checkboxErrors () {
                const errors = [];
                if (!this.$v.checkbox.$dirty) return errors;
                !this.$v.checkbox.checked && errors.push('You must agree to continue!');
                return errors
            },
            passwordErrors () {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.maxLength && errors.push('Password must be at most 10 characters long');
                !this.$v.name.required && errors.push('Password is required.');
                return errors
            },
            nameErrors () {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
                !this.$v.name.required && errors.push('Name is required.');
                return errors
            },
            emailErrors () {
                const errors = [];
                if (!this.$v.email.$dirty) return errors;
                !this.$v.email.email && errors.push('Must be valid e-mail');
                !this.$v.email.required && errors.push('E-mail is required');
                return errors
            },
            isValid(){
                if(!this.emailErrors.length && !this.nameErrors.length && !this.passwordErrors.length && !this.checkboxErrors.length){
                    this.valid = true
                }
            }
        }
    }
</script>

<style scoped>

</style>