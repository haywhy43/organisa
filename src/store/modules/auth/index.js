import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const initialState = {}

export default {
    namespaced: true,
    state: { ...initialState },
    actions,
    mutations,
    getters
}
