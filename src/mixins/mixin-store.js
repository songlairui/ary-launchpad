import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import * as T from '../store/types'

export default {
  computed: {
    ...mapGetters(['aryTheme', 'getItemsViaModule']),
    ...mapState({
      aryThemeVal: (state) => state.theme,
      modules: (state) => state.LaunchFirst.modules
    })
  },
  methods: {
    ...mapMutations({
      setTheme: T.SET_THEME,
      initTheme: T.INIT_THEME
    }),
    ...mapActions(['getLaunchFirst'])
  }
}
