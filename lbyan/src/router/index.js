import Vue from 'vue'
import Router from 'vue-router'
import sy from '@/components/rkwj/sy'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    { path: '/', name: 'sy', component: sy },
    { path: '/register', name: 'register', component: resolve => require(['@/components/user/register'],resolve )},
    { path: '/login', name: 'login', component: resolve => require(['@/components/user/login'],resolve )},
    { path: '/xxck', name: 'xxck', component: resolve => require(['@/components/ccwh/xxck'],resolve )}
  ]
})
