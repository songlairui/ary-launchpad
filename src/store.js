import Vue from 'vue'
import Vuex from 'vuex'
import actions from './store/actions'
import mutations from './store/mutations'
import { initTheme } from './store/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: initTheme(),
    LaunchFirst: { modules: [], moduleBase: [] }
  },
  getters: {
    aryTheme: (state) => (state.theme ? 'light' : 'dark'),
    getItemsViaModule: (state) => (moduleId) => {
      const rootPool = state.LaunchFirst
      const basePool = state.LaunchFirst.moduleBase || []

      const { redirects, items } = basePool.reduce(
        (result, item) => {
          const { belong, redirect } = item
          if (belong === moduleId) {
            if (redirect) {
              result.redirects[redirect] = rootPool[redirect]
            } else {
              result.items.push(item)
            }
          }
          return result
        },
        { redirects: {}, items: [] }
      )

      return { redirects, items }
    }
  },
  mutations,
  actions
})
