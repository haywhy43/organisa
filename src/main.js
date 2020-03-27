import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import config from './plugins/firebaseConfig'

Vue.config.productionTip = false

firebase.initializeApp(config)

const NavLess = () => import('./layout/NavLess.vue')

Vue.component('nav-less-layout', NavLess)

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App)
}).$mount('#app')
