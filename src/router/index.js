import Home from '@/views/home/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/config',
      name: 'Config',
      component: () => import(/* WebpackChunkName: "config" */ '@/views/config/Config.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* WebpackChunkName: "about" */ '@/views/about/About.vue'),
    },
    {
      path: '/setup',
      name: 'Setup',
      component: () => import(/* WebpackChunkName: "setup" */ '@/views/setup/Setup.vue'),
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import(/* WebpackChunkName: "chat" */ '@/views/chat/Chat.vue'),
    },
    {
      path: '/history',
      name: 'History',
      component: () => import(/* WebpackChunkName: "history" */ '@/views/chat/Chat.vue'),
    },
    {
      path: '*',
      component: () => import(/* WebpackChunkName: "not-found" */ '@/views/error/NotFound.vue'),
    },
  ],

  router = new VueRouter({
    mode: 'history',
    routes,
  })

export default router
