/* eslint-disable no-unused-vars */
import firebase from 'firebase'
require('firebase/auth')
require('firebase/firestore')

const actions = {
    REGISTER_USER: ({ commit }, payload) => {
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
                            commit('SET_USER_LEVEL', 1)
                        })
                        .catch((_err) => {
                            console.dir(_err)
                        })
                }
            })
    }
}

export default actions
