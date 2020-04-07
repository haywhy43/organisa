import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import config from './plugins/firebaseConfig'

Vue.config.productionTip = false

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged((user) => {
    store.dispatch('Auth/FETCH_USER', user)
})

const NavLess = () => import('./layout/NavLess.vue')
const Authenticated = () => import('./layout/Authenticated.vue')

Vue.component('nav-less-layout', NavLess)
Vue.component('authenticated-layout', Authenticated)

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app')
