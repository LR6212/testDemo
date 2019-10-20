import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
