import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import(/* webpackChunkName: "config" */ '@/views/config/Config.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    meta: {
      layout: 'BlankLayout',
    },
    component: () => import(/* webpackChunkName: "chat" */ '@/views/chat/Chat.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/error/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
