import Vue from 'vue'
import Vuex from 'vuex'

/*
  Adds the promise polyfill for IE 11
*/
require('es6-promise').polyfill()

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {}
})
