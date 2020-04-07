<template>
    <v-app dark>
        <router-view />
    </v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        //
    }),
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Baloo+Thambi+2|Open+Sans&display=swap');
#app {
    font-family: 'Baloo Thambi 2', 'Open Sans';
}

</style>
