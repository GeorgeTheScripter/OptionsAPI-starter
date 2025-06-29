import About from '@/pages/About.vue'
import CurrentPost from '@/pages/CurrentPost.vue'
import Main from '@/pages/Main.vue'
import Users from '@/pages/Users.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/users/:id',
    component: CurrentPost,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
