import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/Login')        // lazy loading route
    }
  ]
})
