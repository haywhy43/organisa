<template>
    <div class="full">
        <h1>Organisa</h1>
        <v-content>
            <slot />
        </v-content>
    </div>
</template>

<script>
export default {
    name: 'NavLess'
}
</script>

<style lang="scss" scoped>
.full {
    height: 100vh;
    width: 100vw;
    background-color: #1f2d3d;

    h1 {
        position: absolute;
        top: 2%;
        left: 10%;
        color: #f0f3f6;
        font-size: 24px;
        letter-spacing: 0.02em;
    }
    .v-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media screen and (max-width: 640px) {
    .full {
        min-height: 100vh;
        height: auto !important;
    }
}
</style>
