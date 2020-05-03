import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home copy.vue'
// import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/homecopy.vue')
    // component: require('../views/homecopy.vue').default
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
    // component: require('../views/Info.vue').default
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
