import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const initialState = {
    user: '',
    user_auth_state: 0
}

export default {
    namespaced: true,
    state: { ...initialState },
    actions,
    mutations,
    getters
}
