import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CarroView from '../views/CarroView.vue'

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/carro',
      name: 'carro',
      component: CarroView
    }
  ]
})

export default router