import Vue from 'vue'
import App from './App.jsx'
import router from './router'
import store from './store'
import VueRx from 'vue-rx'
import { createProvider } from './vue-apollo'
import UseAntd from './use-antd'
import MixinStore from './mixins/mixin-store'

Vue.use(UseAntd)
Vue.use(VueRx)

Vue.mixin(MixinStore)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App)
}).$mount('#app')
