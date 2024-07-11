import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue');

import RegisterView from '@/views/RegisterView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import BlogsView from '@/views/BlogsView.vue'
import BlogDetailsView from '@/views/BlogDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/blogcategories',
      name: 'blogcategories',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CategoriesView
    },
    {
      path: '/blogs/:cat_id',
      name: 'blogs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BlogsView
    },
    {
      path: '/blog/:blog_id',
      name: 'blogdetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BlogDetailsView
    }
  ]
})

export default router
