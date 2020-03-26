import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const NavLess = () => import('./layout/NavLess.vue')

Vue.component('nav-less-layout', NavLess)

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App)
}).$mount('#app')
