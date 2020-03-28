<template>
    <v-card elevation="20">
        <v-container>
            <p class="card_title">Register</p>
            <p class="sub_title">Create a new account</p>

            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="form.name"
                    label="Username"
                    color="secondary"
                    type="text"
                    :rules="nameRules"
                ></v-text-field>
                <v-text-field
                    v-model="form.email"
                    label="E-mail"
                    color="secondary"
                    type="email"
                    :rules="emailRules"
                ></v-text-field>
                <v-text-field
                    v-model="form.password"
                    label="Password"
                    color="secondary"
                    type="password"
                    :rules="passwordRules"
                ></v-text-field>
                <v-text-field
                    v-model="form.confirmPassword"
                    label="Confirm Password"
                    color="secondary"
                    type="password"
                    :rules="confirmPasswordRules"
                ></v-text-field>

                <v-btn elevation="3" rounded @click="() => register(form)" :disabled="!valid">Proceed</v-btn>
            </v-form>
            <div>
                <p>Already a member? <router-link to="/login">Login</router-link></p>
            </div>
        </v-container>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Register',
    data: () => ({
        valid: true,
        nameRules: [
            (v) => !!v || 'Name is required',
            (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
        passwordRules: [
            (v) => !!v || 'Password is required',
            (v) => (v && v.length >= 6) || 'Password must be 6 or more characters',
            (v) =>
                // eslint-disable-next-line no-useless-escape
                /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(v) ||
                'Password must contain at lease one number and a special character'
        ],
        lazy: false,
        form: {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            phoneNumber: ''
        }
    }),

    computed: {
        confirmPasswordRules() {
            return [
                (v) => !!v || 'Please confirm your password',
                (v) => (v && v == this.form.password) || 'Passwords do not match'
            ]
        }
    },

    methods: {
        validate() {
            this.form.email != '' && this.form.password != '' && this.form.confirmPassword != ''
                ? this.$refs.form.validate()
                : (this.valid = false)
        },

        ...mapActions('Auth', {
            register: 'REGISTER_USER'
        })
    },

    mounted() {
        // eslint-disable-next-line no-useless-escape
        console.log()
        this.validate()
    }
}
</script>

<style lang="scss" scoped>
.v-input {
    margin-top: 10px !important;
}
</style>
