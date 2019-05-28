<template>
  <div class="singer">
    <div class="tab">
      <el-row>
        <el-col :span="4">
          <router-link to="/" class="link-a">个性化推荐</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/musicList" class="link-a">歌单</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/radio" class="link-a">主播电台</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/Leaderboard" class="link-a">排行榜</router-link>
        </el-col>
        <el-col :span="4" class="active">
          <router-link to="/singer" class="link-a">歌手</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/LatestMusic" class="link-a">最新音乐</router-link>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div class="filter">
        <div class="row">
          <span>语种：</span>
          <a href="javascript:void(0)" class="item">全部</a>
          <a href="javascript:void(0)" class="item">华语</a>
          <a href="javascript:void(0)" class="item">欧美</a>
          <a href="javascript:void(0)" class="item">日本</a>
          <a href="javascript:void(0)" class="item">韩国</a>
          <a href="javascript:void(0)" class="item">其他</a>
        </div>
        <div class="row">
          <span>分类：</span>
          <a href="javascript:void(0)" class="item">全部</a>
          <a href="javascript:void(0)" class="item">男歌手</a>
          <a href="javascript:void(0)" class="item">女歌手</a>
          <a href="javascript:void(0)" class="item">乐队组合</a>
        </div>
        <div class="row">
          <span>筛选：</span>
          <a href="javascript:void(0)" class="item">全部</a>
          <a href="javascript:void(0)" class="item">A</a>
          <a href="javascript:void(0)" class="item">B</a>
          <a href="javascript:void(0)" class="item">C</a>
          <a href="javascript:void(0)" class="item">D</a>
          <a href="javascript:void(0)" class="item">E</a>
          <a href="javascript:void(0)" class="item">F</a>
          <a href="javascript:void(0)" class="item">G</a>
          <a href="javascript:void(0)" class="item">H</a>
          <a href="javascript:void(0)" class="item">I</a>
          <a href="javascript:void(0)" class="item">J</a>
          <a href="javascript:void(0)" class="item">K</a>
          <a href="javascript:void(0)" class="item">L</a>
          <a href="javascript:void(0)" class="item">M</a>
          <a href="javascript:void(0)" class="item">N</a>
          <a href="javascript:void(0)" class="item">O</a>
          <a href="javascript:void(0)" class="item">P</a>
          <a href="javascript:void(0)" class="item">Q</a>
          <a href="javascript:void(0)" class="item">R</a>
          <a href="javascript:void(0)" class="item">S</a>
          <a href="javascript:void(0)" class="item">T</a>
          <a href="javascript:void(0)" class="item">U</a>
          <a href="javascript:void(0)" class="item">V</a>
          <a href="javascript:void(0)" class="item">W</a>
          <a href="javascript:void(0)" class="item">X</a>
          <a href="javascript:void(0)" class="item">Y</a>
          <a href="javascript:void(0)" class="item">Z</a>
          <a href="javascript:void(0)" class="item">#</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'singer',
  data () {
    return {
      hidden: false
    }
  }
}
</script>
<style scoped>
.singer .tab{
  border-bottom: 2px solid #d7d7d7;
  text-align: center;
}
.singer .tab .el-row{
  width: 70%;
  margin: 0 auto;
}
.singer .tab .el-row .el-col{
  padding: 0.9rem 0;
}
.singer .el-row .el-col a{
  color: #333;
  text-decoration: none;
}
.singer .el-row .active{
  border-bottom: 2px solid #c62f2f;
  margin-bottom: -2px;
}
.singer .el-row .active a{
  color: #c62f2f;
}
.content{
  padding-top: 20px;
}
.content .filter{
  padding-bottom: 20px;
  border-bottom: 1px solid #d7d7d7;
}
.content .filter .item{
  display: inline-block;
  padding: 0 0.8rem;
  margin: 0.4rem 0;
  border-right: 1px solid #d7d7d7;
  color: #666;
  text-decoration: none;
}
.content .filter .item:last-child{
  border-right: none;
}
</style>
