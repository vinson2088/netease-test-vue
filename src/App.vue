<template>
  <div id="app">
    <page></page>
  </div>
</template>

<script>
import page from './components/page'
export default {
  name: 'App',
  components: {
    page
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  box-sizing: border-box;
}
ul,li{
  padding: 0;
  margin: 0;
  list-style: none;
}
p{
  margin: 0;
}
.clearfix{
  clear: both;
}
</style>
