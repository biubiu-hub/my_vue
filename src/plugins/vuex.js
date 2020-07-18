import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import home from "../store/module/home.js"

import actions from '../store/module/home.js'
import mutations from '../store/mutations.js'
import state from '../store/state.js'
import getters from '../store/getters.js'

let store = new Vuex.Store({
	actions,mutations,state,getters,modules:{home}
})
export default store;