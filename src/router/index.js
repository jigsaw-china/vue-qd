import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Site from '@/components/Site'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/site',
      name: 'Site',
      component: Site
    }
  ]
})
