import { mapState, mapMutations } from 'vuex'
import * as T from '../store-types'

export default {
  computed: {
    ...mapState({
      aryTheme: (state) => state.theme
    })
  },
  methods: {
    ...mapMutations({
      setTheme: T.SET_THEME
    })
  }
}
