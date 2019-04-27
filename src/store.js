import Vue from 'vue'
import Vuex from 'vuex'
import * as T from './store-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: true
  },
  mutations: {
    [T.SET_THEME](state, payload) {
      state.theme = !!payload
    }
  },
  actions: {}
})
