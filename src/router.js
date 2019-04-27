import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Find from './views/Find.vue'
import List from './views/List.vue'
import Search from './views/Search.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
})
