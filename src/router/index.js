import Home from '@/views/Home.vue'
import OrderPlace from '@/views/OrderPlace.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Flag to track if the user has visited /orderplace
let hasVisitedOrderPlace = false;

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        // Check if the user has visited /orderplace
        if (hasVisitedOrderPlace) {
          next();
        } else {
          next('/orderplace'); // Redirect to /orderplace if not visited
        }
      }
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

// Global navigation guard to set the flag when visiting /orderplace
router.beforeEach((to, from, next) => {
  if (to.path === '/orderplace') {
    hasVisitedOrderPlace = true;
  }
  next();
})

export default router
