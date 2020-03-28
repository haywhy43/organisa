const getters = {
    user_level: (state) => state.user_auth_state,
    LOADING_STATUS: (state) => state.loading_status
}

export default getters
