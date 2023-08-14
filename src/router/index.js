// Composables
import HomeVue from '@/views/Home.vue'
import OrderPlaceVue from '@/views/OrderPlace.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeVue,
    },
    {
      path: '/orderplace',
      name: 'OrderPlace',
      component: OrderPlaceVue,
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeVue,
        }
      ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
