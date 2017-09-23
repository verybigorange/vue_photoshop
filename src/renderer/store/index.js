import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

import {state,mutations,actions} from './global'

Vue.use(Vuex)



export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
