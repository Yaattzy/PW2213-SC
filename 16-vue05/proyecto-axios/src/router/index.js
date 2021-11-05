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
    path: '/post/:id',
    name: 'DetallePost',
     component: () => import('../views/DetallePost.vue')
  },
  {
    path: '/todos',
    name: 'Todos',
     component: () => import('../views/Todos.vue')
  },
  {
    path: '/todos-completos',
    name: 'TodosCompletos',
     component: () => import('../views/TodosCompletos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
