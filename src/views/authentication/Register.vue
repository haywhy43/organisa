<template>
    <v-card elevation="20">
        <v-container>
            <p class="card_title">Register</p>
            <p class="sub_title">Create a new account</p>

            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field v-model="first" label="E-mail" color="secondary" clearable></v-text-field>
                <v-text-field v-model="first" label="Username" color="secondary" clearable></v-text-field>
                <v-text-field v-model="first" label="Phone Number" color="secondary" clearable></v-text-field>

                <v-text-field v-model="first" label="Password" color="secondary"></v-text-field>
                <v-text-field v-model="first" label="Confirm Password" color="secondary"></v-text-field>

                <v-btn elevation="3" rounded @click="resetValidation">
                    Proceed
                </v-btn>
            </v-form>
            <div>
                <p>Already a member? <router-link to="/login">Login</router-link></p>
            </div>
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style lang="scss" scoped>
.v-input {
    margin-top: 10px !important;
}
</style>
