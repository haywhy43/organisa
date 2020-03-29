/* eslint-disable no-unused-vars */
import firebase from 'firebase/app'
require('firebase/auth')

const actions = {
    REGISTER_USER: ({ commit }, payload) => {
        commit('SET_LOADING_STATUS', true)
        commit('SET_ERROR_MESSAGE', '')
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then((res) => {
                if (res.user) {
                    res.user
                        .updateProfile({
                            displayName: payload.name
                        })
                        .then((_res) => {
                            commit('SET_USER', firebase.auth().currentUser)
                            commit('SET_LOADING_STATUS', false)
                        })
                        .catch((_err) => {
                            console.dir(_err)
                        })
                }
            })
            .catch((err) => {
                commit('SET_LOADING_STATUS', false)
                commit('SET_ERROR_MESSAGE', err.message)
            })
    },

    AUTHENTICATE_USER: ({ commit }, payload) => {
        commit('SET_LOADING_STATUS', true)
        commit('SET_ERROR_MESSAGE', '')
        firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then((res) => {
                commit('SET_LOADING_STATUS', false)
                commit('SET_USER', res.user)
            })
            .catch((err) => {
                commit('SET_LOADING_STATUS', false)
                commit('SET_ERROR_MESSAGE', err.message)
            })
    },

    FETCH_USER({ commit }, user) {
        commit('SET_LOGGED_IN', user !== null)
        if (user) {
            commit('SET_USER', user)
        } else {
            commit('SET_USER', null)
        }
    }
}

export default actions
