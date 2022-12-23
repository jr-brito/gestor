// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/2',
        name: 'Home2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home2.vue'),
      },
    ]
  

    const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
