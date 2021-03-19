import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/matchmaking',
    name : 'Matchmaking',
    component: () => import('../views/Matchmaking.vue')
  },
  {
    path: '/loading',
    name : 'Loading',
    component: () => import('../views/Loading.vue')
  },
  {
    path: '/match',
    name: 'InMatch',
    component: () => import(/* webpackChunkName: "inMatch" */ '../views/InMatch.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  else next()
})

export default router
