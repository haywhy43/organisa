const mutations = {
    SET_LOADING_STATUS: (state, payload) => {
        state.loading_status = payload
    },
    SET_USER: (state, payload) => {
        window.localStorage.setItem('user', payload)
        state.user = payload
    },
    SET_LOGGED_IN: (state, payload) => {
        state.is_logged_in = payload
    },
    SET_ERROR_MESSAGE: (state, payload) => {
        state.error_message = payload
    }
}

export default mutations
