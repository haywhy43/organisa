<template>
    <div class="side_bar">
        <div class="side_bar_inner">
            <div class="logo_wrapper">
                <h1>Organisa</h1>
            </div>

            <ul class="navigation">
                <li class="active">
                    <div class="svg_bg">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 37.3 36.32"
                            svg-inline=""
                            role="presentation"
                            focusable="false"
                            tabindex="-1"
                            class="global-nav__icon dark"
                        >
                            <path
                                fill="#021e3b"
                                d="M32.12 33.39V19.94l-13.47-9.17-13.47 9.17v13.45h10.29V22.72h6.36v10.67h10.29z"
                            ></path>
                            <path
                                fill="#d5e9ff"
                                d="M18.65 7.77l15.69 10.68 2.25-3.3L18.65 2.93.71 15.15l2.25 3.3L18.65 7.77z"
                            ></path>
                        </svg>
                    </div>
                    <span class="nav_text">Dashboard</span>
                </li>
                <li class="">
                    <div class="svg_bg">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 37.3 36.32"
                            svg-inline=""
                            role="presentation"
                            focusable="false"
                            tabindex="-1"
                            class="global-nav__icon dark"
                        >
                            <path fill="#9aa7c5" d="M35.38 2.78H18.24v16.76h17.14V2.78z"></path>
                            <path
                                d="M1.92 2.78h13.32v16.76H1.92zm0 19.76h33.45v4H1.92zm0 7h33.45v4H1.92z"
                                fill="#d4dbe6"
                            ></path>
                        </svg>
                    </div>
                    <span class="nav_text">Tasks</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
}
</script>

<style lang="scss" scoped>
.side_bar {
    height: 100vh;
    width: 20%;
    // border-right: 1px solid black;
    display: flex;
    align-items: center;
    &_inner {
        height: 80%;
        margin: auto;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        .logo_wrapper {
            h1 {
                font-size: 36px;
                font-weight: 900;
                color: #021e3b;
            }
        }

        .navigation {
            list-style: none;
            margin: 0px auto !important;
            padding: 0px;
            margin-top: 50px !important;

            // width: 100%;

            li {
                height: 55px;
                display: flex;
                align-items: center;
                // justify-content: space-between;
                font-size: 17px;
                line-height: 33px;
                color: #222;
                padding-left: 3px;
                margin-bottom: 25px;
                letter-spacing: 0.05em;
                font-weight: 600;

                .nav_text {
                    margin: 0px 20px;
                }

                .global-nav__icon {
                    width: 28px;
                    height: 24px;
                    // fill: rgba(10, 46, 101, 0.3);
                    transition: fill 0.4s ease;
                    // margin-right: 10px;
                }

                .svg_bg {
                    // background: #9fc5ec;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 88%;
                    width: 48px;
                    // margin-right: 20px;
                }

                &.active {
                    background: #468dda;
                    color: white !important;
                    // border-top-left-radius: 10px;
                    // border-bottom-left-radius: 10px;
                    border-radius: 10px;
                    // box-shadow: -4px 0px 1px #1f2d3d;

                    .svg_bg {
                        background: #9fc5ec;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 88%;
                        width: 48px;
                        // margin-right: 20px;
                    }
                }
            }
        }
    }
}
</style>
