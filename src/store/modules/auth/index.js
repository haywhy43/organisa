import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const initialState = {
    user: '',
    user_auth_state: 0,
    loading_status: false,
    is_logged_in: false
}

export default {
    namespaced: true,
    state: { ...initialState },
    actions,
    mutations,
    getters
}
