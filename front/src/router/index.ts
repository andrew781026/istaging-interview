import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/DetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/istaging-interview/'),
  routes
})

export default router
