<template>
  <div class="page">
    <el-header style="height: 44px;">
      <top></top>
    </el-header>
    <el-main>
      <middle></middle>
    </el-main>
    <el-footer style="height: 50px;">
      <player></player>
    </el-footer>
  </div>
</template>
<script>
import top from './top'
import middle from './middle'
import player from './player'
export default {
  name: 'page',
  data () {
    return {}
  },
  components: {
    top,
    middle,
    player
  }
}
</script>
<style scoped>
.page{
  width: 1020px;
  margin: 0 auto;
  font-size: 14px;
  box-shadow: 0 0 15px #999;
}
.el-header{
  padding: 0;
}
.el-main{
  padding: 0;
  height: 570px;
}
.el-footer{
  background-color: #f6f6f8;
  padding: 0;
}
</style>
