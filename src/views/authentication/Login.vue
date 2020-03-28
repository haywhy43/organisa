<template>
    <v-card elevation="20">
        <v-container>
            <p class="card_title">Login</p>
            <p class="sub_title">Sign into your account</p>

            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="form.email"
                    label="E-mail"
                    type="email"
                    color="secondary"
                    :rules="emailRules"
                ></v-text-field>

                <v-text-field
                    v-model="form.password"
                    type="password"
                    label="Password"
                    color="secondary"
                    :rules="passwordRules"
                ></v-text-field>

                <v-btn
                    elevation="3"
                    rounded
                    @click="() => login(form)"
                    :disabled="!valid || loadingStatus"
                    :loading="loadingStatus"
                >
                    Proceed
                </v-btn>
            </v-form>
            <div>
                <p>Not a member? <router-link to="/register">Register</router-link></p>
            </div>
        </v-container>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            valid: true,
            emailRules: [(v) => !!v || 'E-mail is required'],
            passwordRules: [(v) => !!v || 'Password is required'],
            form: {
                email: '',
                password: ''
            },
            lazy: false
        }
    },
    methods: {
        validate() {
            this.form.email != '' && this.form.password != '' ? this.$refs.form.validate() : (this.valid = false)
        },

        ...mapActions('Auth', {
            login: 'AUTHENTICATE_USER'
        })
    },

    computed: {
        ...mapGetters('Auth', {
            loadingStatus: 'LOADING_STATUS'
        })
    },
    mounted() {
        this.validate()
        console.log(this.valid, this.loadingStatus)
    }
}
</script>

<style lang="scss" scoped></style>
