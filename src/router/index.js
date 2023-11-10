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

// 创建路由并暴露
export default new VueRouter({
  mode: 'hash',
  routes: [
    // 一级路由
    {
      path: '/home',
      component: Home,
      meta: {
        Isdisplay: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        Isdisplay: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        Isdisplay: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        Isdisplay: false
      }
    },
    {
      // 重定向到home组件
      path: '/',
      redirect: '/home',
    }
  ]
})