import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/home'

//const home = r => require.ensure([], () => r(require('@/components/home/home')), 'home')
const about = r => require.ensure([], () => r(require('@/components/about/about')), 'about')
const setting = r => require.ensure([], () => r(require('@/components/setting/setting.vue')), 'setting')
const my = r => require.ensure([], () => r(require('@/components/my/my.vue')), 'my')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
