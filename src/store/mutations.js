import * as T from './types'
import { initTheme } from './utils'

export default {
  [T.INIT_THEME](state) {
    state.theme = initTheme()
  },
  [T.SET_THEME](state, payload) {
    state.theme = !!payload
  },
  [T.SET_LAUNCH_FIRST](state, payload) {
    state.LaunchFirst = payload
  }
}
