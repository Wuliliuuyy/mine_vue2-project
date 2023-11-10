<template>
  <div id="app">
    <!--头部组件 -->
    <Header></Header>
    <!-- 路由组件,路由组件出口的位置 -->
    <router-view></router-view>
    <!-- 底部组件 判断是否显示底部的内容-->
    <Footer v-show="$route.meta.Isdisplay"></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
