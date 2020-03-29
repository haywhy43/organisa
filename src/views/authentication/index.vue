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
                <template v-if="$route.path === '/login'">
                    <login-card />
                </template>
                <template v-else-if="$route.path === '/register'">
                    <register-card />
                </template>
            </div>
        </div>
    </nav-less-layout>
</template>

<script>
const Login = () => import('./Login')
const Register = () => import('./Register')
export default {
    name: 'Authentication',
    components: {
        'login-card': Login,
        'register-card': Register
    }
}
</script>

<style lang="scss">
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
                    color: rgb(59, 1, 121);
                    font-weight: 600;
                    margin: 0px;
                    padding-bottom: 5px;
                }
                .sub_title {
                    color: rgba(59, 1, 121, 0.5);
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
                background-color: rgb(59, 1, 121) !important;
                color: white !important;
                height: 45px;
            }
        }

        a {
            text-decoration: none;
            color: rgba(59, 1, 121, 0.5) !important;
            font-weight: 600;
        }
    }
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

.error-message {
    font-size: 14px;
    color: red;
    text-align: center;
}
</style>
