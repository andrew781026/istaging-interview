import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/ListView.vue'),
    meta: {title: 'Tree 圖書館 🏛'}
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/DetailView.vue'),
    meta: {title: '單本書籍'}
  }
]

const router = createRouter({
  history: createWebHistory('/istaging-interview/'),
  routes
})

router.beforeEach((to, from, next) => {
  // TypeGuard
  if (typeof to.meta.title === 'string') {
    window.document.title = to.meta.title
  }
  next()
})

export default router
