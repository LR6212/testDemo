import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Infor from '@/components/Infor'

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
    },
    {
      path: '/Admin/account',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Admin/publishInfor',
      name: 'Infor',
      component: Infor
    }

  ]
})
