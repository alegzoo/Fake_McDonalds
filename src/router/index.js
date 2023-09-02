// Composables
import Home from '@/views/Home.vue'
import OrderPlace from '@/views/OrderPlace.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/orderplace',
      name: 'OrderPlace',
      component: OrderPlace,
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
