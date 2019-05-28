<template>
  <el-row class="middle">
    <el-col :span="5" class="left">
      <ul>
        <li>
          <span class="title">推荐</span>
          <ul class="secondary">
            <li class="active">
              <i class="iconfont icon-music"></i>
              <span>发现音乐</span>
            </li>
            <li>
              <i class="iconfont icon-FM"></i>
              <span>私人FM</span>
            </li>
            <li>
              <i class="iconfont icon-video"></i>
              <span>视频</span>
            </li>
            <li>
              <i class="iconfont icon-friend"></i>
              <span>朋友</span>
            </li>
          </ul>
        </li>
        <li>
          <span class="title">我的音乐</span>
          <ul class="secondary">
            <li>
              <i class="iconfont icon-local-musci"></i>
              <span>本地音乐</span>
            </li>
            <li>
              <i class="iconfont icon-download"></i>
              <span>下载管理</span>
            </li>
            <li>
              <i class="iconfont icon-cloud"></i>
              <span>我的音乐云盘</span>
            </li>
            <li>
              <i class="iconfont icon-collection"></i>
              <span>我的收藏</span>
            </li>
          </ul>
        </li>
        <li>
          <span class="title">创建的歌单<span class="right-btn"><i class="el-icon-circle-plus"></i><i class="el-icon-arrow-down"></i></span></span>
          <ul class="secondary">
            <li>
              <i class="iconfont icon-like"></i>
              <span>我喜欢的音乐</span>
            </li>
          </ul>
        </li>
        <li>
          <span class="title">收藏的歌单<span class="right-btn"><i class="el-icon-arrow-down"></i></span></span>
        </li>
      </ul>
    </el-col>
    <el-col :span="19" class="right">
      <router-view/>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'middle',
  data () {
    return {}
  }
}
</script>
<style scoped>
.middle{
  text-align: left;
  height: 100%;
}
.middle .left{
  background-color: #f5f5f7;
  padding: 0.4rem 0;
  line-height: 2.2rem;
  height: 100%;
  overflow-y: scroll;
  position: relative;
}
.middle .right{
  background-color: #fafafa;
  padding: 0 1rem;
  height: 100%;
  overflow-y: scroll;
}
.title{
  padding-left: 0.5rem;
}
.title .right-btn{
  float: right;
  color: #ccc;
}
.title .right-btn i{
  margin: 0 0.2rem;
  cursor: pointer;
}
.title .right-btn i:hover{
  color: #999;
}
.secondary li{
  padding-left: 1rem;
  color: #5c5c5c;
}
.secondary li:hover{
  color: #000;
}
.secondary .active{
  border-left: 4px solid #c62f2f;
  background-color: #e6e7ea;
  padding-left: calc(1rem - 4px)
}
::-webkit-scrollbar{
  width: 3px;
}
</style>
