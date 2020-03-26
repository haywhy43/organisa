<template>
    <v-card elevation="20">
        <v-container>
            <p class="card_title">Login</p>
            <p class="sub_title">Sign into your account</p>

            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="first"
                    label="E-mail | Name | Phone number"
                    color="secondary"
                    clearable
                ></v-text-field>

                <v-text-field v-model="first" label="Password" color="secondary"></v-text-field>

                <v-btn elevation="3" rounded @click="resetValidation">
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
export default {
    name: 'Login'
}
</script>

<style lang="scss" scoped></style>
