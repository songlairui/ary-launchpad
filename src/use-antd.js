import { Switch, Button, Affix, Divider, Icon } from 'ant-design-vue'

export default {
  install(Vue) {
    const Insts = [Switch, Button, Affix, Divider, Icon]
    Insts.forEach((inst) => {
      Vue.use(inst)
    })
  }
}
