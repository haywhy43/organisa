const mutations = {
    SET_LOADING_STATUS: (state, payload) => {
        state.loading_status = payload
    },
    SET_USER: (state, payload) => {
        state.user = payload
    },
    SET_LOGGED_IN: (state, payload) => {
        state.is_logged_in = payload
    }
}

export default mutations
