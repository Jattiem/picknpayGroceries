import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/grocery',
    name: 'Grocery',
    component: ()=> import('../views/Grocery.vue')
  },
  {
    path: '/groceries',
    name: 'Groceries',
    component: ()=> import('../views/Groceries.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=> import('../views/register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
