import { Switch, Button, Affix, Divider, Icon, message } from 'ant-design-vue'
import { ICON_FONT_URL } from './constant'

export default {
  install(Vue) {
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: ICON_FONT_URL
    })
    const Insts = [Switch, Button, Affix, Divider, Icon]
    Insts.forEach((inst) => {
      Vue.use(inst)
    })
    Vue.component('IconFont', IconFont)
    Vue.prototype.$message = message
  }
}
