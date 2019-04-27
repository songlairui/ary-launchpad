import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRx from 'vue-rx';
import { createProvider } from './vue-apollo'

Vue.use(VueRx);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
