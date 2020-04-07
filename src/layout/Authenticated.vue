<template>
    <div class="authenticated">
        <side-bar />
        <div class="content"></div>
    </div>
</template>

<script>
import SideBar from './includes/SideBar.vue'
export default {
    name: 'AuthenticatedLayout',
    components: {
        'side-bar': SideBar,
    },
}
</script>

<style lang="scss" scoped>
.authenticated {
    background: rgb(255, 255, 255);
    display: flex;
    align-items: center;

    .content {
        width: 79.4%;
        background: #d5e9ff;
        height: 110vh;
        margin-top: 12px;
        border-radius: 40px;
    }
}
</style>
