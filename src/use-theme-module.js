import CSSModules from 'vue-css-modules'
import styles from './assets/theme-base.module.less'

export default {
  install(Vue) {
    Vue.mixin(CSSModules(styles))
  }
}
