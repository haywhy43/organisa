import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const initialState = {
    user: window.localStorage.getItem('user'),
    loading_status: false,
    is_logged_in: false,
    error_message: ''
}

export default {
    namespaced: true,
    state: { ...initialState },
    actions,
    mutations,
    getters
}
