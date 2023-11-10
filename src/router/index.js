// 引入vue
import Vue from 'vue';

// 引入vue路由
import VueRouter from 'vue-router';

// 使用路由插件
Vue.use(VueRouter)


// 引入各个路由组件
import Home from '../pages/home/Home.vue'
import Search from '../pages/search/Search.vue'
import Login from '../pages/login/Login.vue'
import Register from '../pages/register/Register.vue'

export default new VueRouter({
  mode: 'hash',
  routes: [
    // 一级路由
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
  ]
})