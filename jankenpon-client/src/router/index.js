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
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
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
    component: () => import('../views/InMatch.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.name !== 'Register'  && !localStorage.access_token) next({ name: 'Login' })
  else next()
})

export default router
