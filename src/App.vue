<template>
  <div id="app">
    <div id="nav" v-show="this.$store.state.flag" style="background-color:white;">
      <router-link to="/home"><i class="iconfont icon-zhuye"></i>主页</router-link>
      <router-link to="/experience"><i class="iconfont icon-changguan"></i>体验馆</router-link>
      <router-link to="/mall"><i class="iconfont icon-shangcheng"></i>家装商城</router-link>
      <router-link to="/mine"><i class="iconfont icon-wode"></i>我的</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Microsoft YaHei, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #f4f4f4;
  background-color: white;
  z-index: 101;
}

#nav a {
  flex:1;
  color: #666;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  font-size: 14px;
  background: white;
}
#nav i{
  font-size: 24px;
  background: white;
}
#nav a.router-link-exact-active i{
  color: #feb729;
}
</style>
