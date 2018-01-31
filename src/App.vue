<template>
  <div id="app">
    
    <router-view/>
    <div class="tabbar">
      <router-link to="/home">首页</router-link>
      <router-link to="/shop">商城</router-link>
      <router-link to="/go">到店</router-link>
      <router-link to="/fashion">时尚圈</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
