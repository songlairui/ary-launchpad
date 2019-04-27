import Vue from 'vue'
import Vuex from 'vuex'
import * as T from './store-types'

Vue.use(Vuex)

function initTheme() {
  const cache = localStorage.getItem('theme')
  if (cache) {
    return cache !== 'dark' ? 'light' : 'dark'
  }
  return new Date().getHours() < 16
}

export default new Vuex.Store({
  state: {
    theme: initTheme()
  },
  getters: {
    aryTheme: (state) => (state.theme ? 'light' : 'dark')
  },
  mutations: {
    [T.SET_THEME](state, payload) {
      state.theme = !!payload
    }
  },
  actions: {}
})
