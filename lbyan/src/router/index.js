import Vue from 'vue'
import Router from 'vue-router'
import sy from '@/components/rkwj/sy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sy',
      component: sy
    }
  ]
})
