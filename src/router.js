import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/launch-pad'
    },
    {
      path: '/vue-cli-home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/launch-pad',
      name: 'launchpad',
      component: () =>
        import(/* webpackChunkName: "launchpad" */ './views/LaunchPad.vue')
    }
  ]
})
