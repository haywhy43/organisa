import firebase from 'firebase'
require('firebase/auth')

const actions = {
    REGISTER_USER: ({ commit }, payload) => {
      console.log(payload)
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((user) => {
            console.log(user)
            commit()
        })
    }
}

export default actions
