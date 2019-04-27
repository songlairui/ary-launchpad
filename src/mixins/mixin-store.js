import { mapState, mapGetters, mapMutations } from 'vuex'
import * as T from '../store-types'

export default {
  computed: {
    ...mapGetters(['aryTheme']),
    ...mapState({
      aryThemeVal: (state) => state.theme
    })
  },
  methods: {
    ...mapMutations({
      setTheme: T.SET_THEME
    })
  }
}
