import Vue from 'vue'
import App from './App.vue'

// 关闭语法检查
Vue.config.productionTip = false

// 引入默认样式
import './assets/reset.css'

// 注册全局组件
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
Vue.component('Header', Header)
Vue.component('Footer', Footer)


new Vue({
  render: h => h(App),
}).$mount('#app')
