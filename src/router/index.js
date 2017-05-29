import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import Home from '@/components/home.vue'
import Login from '@/components/login.vue'
import Register from '@/components/register.vue'
import auth from '../auth'

Vue.use(Resource)
Vue.use(Router)

//auth.checkAuth()

export default new Router({
  routes: [
    {path: '/home', component: Home, meta: {requiresAuth: true}},
    {path: '/login', component: Login},
    {path: '/register',component:Register},
    {path: '*', redirect: '/login'},

  ]
})
