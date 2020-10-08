import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Config from '../views/Config.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/config',
    name: 'Config',
    component: Config
  },
  {
    path: '/application',
    name: 'Application',
    component: () => import('../views/Application.vue')
  }
]

const router = new VueRouter({
  mode: 'history',//路由模式
  base: process.env.BASE_URL,//基路径
  routes//路由配置
})

export default router
