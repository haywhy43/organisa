<template>
    <nav-less-layout>
        <div class="inner_page">
            <div class="left">
                <h2>
                    Managing your time without setting priorities is like shooting randomly and calling whatever you hit
                    the target.
                </h2>
                <p><i>- Peter Turla</i></p>
            </div>

            <div class="right">
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
                            <p>Not a member? <router-link to="/">Register</router-link></p>
                        </div>
                    </v-container>
                </v-card>
            </div>
        </div>
    </nav-less-layout>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style lang="scss" scoped>
.inner_page {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .left {
        width: 50%;
        h2 {
            color: #f0f3f6;
            font-weight: 800;
            font-size: 32px;
        }

        p {
            color: #485768;
            margin-top: 20px;
            font-size: 18px;
        }
    }

    .right {
        width: 50%;

        .v-card {
            background-color: #e2e2e2;
            width: 70%;
            margin-left: auto !important;
            .container {
                padding: 35px 55px;
                .card_title {
                    font-size: 30px !important;
                    color: #283444;
                    margin: 0px;
                    padding-bottom: 5px;
                }
                .sub_title {
                    color: #485768;
                    font-size: 16px;
                }
            }

            .v-form {
                margin-bottom: 40px;
                .v-input {
                    margin-top: 20px;
                }
            }

            .v-btn {
                padding: 0 12px;
                font-size: 13px !important;
                font-weight: 700;
                margin-top: 20px;
                width: 100%;
                background-color: #341ef6 !important;
                color: white !important;
            }
        }

        a {
            text-decoration: none;
            color: #341ef6 !important;
            font-weight: 600;
        }
    }
}
.theme--light.v-label {
    color: #f0f3f6 !important;
}

::placeholder {
    color: #fff !important;
    font-size: 12px;
}

@media screen and (max-width: 1200px) {
    .right {
        .v-card {
            width: 80% !important;
        }
    }
}

@media screen and (max-width: 900px) {
    .inner_page {
        width: 90% !important;
    }
    .right {
        .v-card {
            width: 90% !important;
        }
    }
}

@media screen and (max-width: 640px) {
    .inner_page {
        width: 95% !important;
        flex-wrap: wrap-reverse;

        .left {
            width: 90% !important;
            margin: auto;

            h2 {
                font-size: 20px !important;
            }

            p {
                margin-bottom: 10px;
            }
        }

        .right {
            width: 100% !important;
            height: 100%;
            margin-bottom: 20px;
            margin-top: 100px;

            .v-card {
                margin: auto !important;

                .container {
                    padding: 35px 40px !important;
                }
            }
        }
    }
}
</style>
