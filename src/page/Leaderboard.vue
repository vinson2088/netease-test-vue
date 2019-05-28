<template>
  <div class="Leaderboard">
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
        <el-col :span="4" class="active">
          <router-link to="/Leaderboard" class="link-a">排行榜</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/singer" class="link-a">歌手</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/LatestMusic" class="link-a">最新音乐</router-link>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div class="official">
        <div class="title">
          <span>官方榜</span>
        </div>
        <div class="official-content">
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="table">
                <div class="head">
                  <img src="../../static/images/Soaring.png" alt="" width="100%">
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <el-row>
                        <el-col :span="2">1</el-col>
                        <el-col :span="5">214%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">2</el-col>
                        <el-col :span="5">162%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">3</el-col>
                        <el-col :span="5">135%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">4</el-col>
                        <el-col :span="5">125%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">5</el-col>
                        <el-col :span="5">123%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">6</el-col>
                        <el-col :span="5">116%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li class="more">
                      <a href="#">查看全部 <i class="el-icon-arrow-right"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="table">
                <div class="head">
                  <img src="../../static/images/new-song.png" alt="" width="100%">
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <el-row>
                        <el-col :span="2">1</el-col>
                        <el-col :span="5">214%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">2</el-col>
                        <el-col :span="5">162%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">3</el-col>
                        <el-col :span="5">135%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">4</el-col>
                        <el-col :span="5">125%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">5</el-col>
                        <el-col :span="5">123%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">6</el-col>
                        <el-col :span="5">116%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li class="more">
                      <a href="#">查看全部 <i class="el-icon-arrow-right"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="table">
                <div class="head">
                  <img src="../../static/images/Original.png" alt="" width="100%">
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <el-row>
                        <el-col :span="2">1</el-col>
                        <el-col :span="5">214%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">2</el-col>
                        <el-col :span="5">162%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">3</el-col>
                        <el-col :span="5">135%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">4</el-col>
                        <el-col :span="5">125%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">5</el-col>
                        <el-col :span="5">123%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">6</el-col>
                        <el-col :span="5">116%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li class="more">
                      <a href="#">查看全部 <i class="el-icon-arrow-right"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="table">
                <div class="head">
                  <img src="../../static/images/hot.png" alt="" width="100%">
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <el-row>
                        <el-col :span="2">1</el-col>
                        <el-col :span="5">214%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">2</el-col>
                        <el-col :span="5">162%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">3</el-col>
                        <el-col :span="5">135%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">4</el-col>
                        <el-col :span="5">125%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">5</el-col>
                        <el-col :span="5">123%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">6</el-col>
                        <el-col :span="5">116%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li class="more">
                      <a href="#">查看全部 <i class="el-icon-arrow-right"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="table">
                <div class="head">
                  <img src="../../static/images/singer.png" alt="" width="100%">
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <el-row>
                        <el-col :span="2">1</el-col>
                        <el-col :span="5">214%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">2</el-col>
                        <el-col :span="5">162%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">3</el-col>
                        <el-col :span="5">135%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">4</el-col>
                        <el-col :span="5">125%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">5</el-col>
                        <el-col :span="5">123%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li>
                      <el-row>
                        <el-col :span="2">6</el-col>
                        <el-col :span="5">116%</el-col>
                        <el-col :span="12" class="one-line">歌名太长不想打</el-col>
                        <el-col :span="5">歌手名</el-col>
                      </el-row>
                    </li>
                    <li class="more">
                      <a href="#">查看全部 <i class="el-icon-arrow-right"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="world">
        <div class="title">
          <span>全球榜</span>
        </div>
        <div class="world-content">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic1.png" alt="" width="100%">
                </div>
                <p>榜单名字</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic1.png" alt="" width="100%">
                </div>
                <p>榜单名字</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic1.png" alt="" width="100%">
                </div>
                <p>榜单名字</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic1.png" alt="" width="100%">
                </div>
                <p>榜单名字</p>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic1.png" alt="" width="100%">
                </div>
                <p>榜单名字</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic1.png" alt="" width="100%">
                </div>
                <p>榜单名字</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic1.png" alt="" width="100%">
                </div>
                <p>榜单名字</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic1.png" alt="" width="100%">
                </div>
                <p>榜单名字</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Leaderboard',
  data () {
    return {}
  }
}
</script>
<style scoped>
.Leaderboard .tab{
  border-bottom: 2px solid #d7d7d7;
  text-align: center;
}
.Leaderboard .tab .el-row{
  width: 70%;
  margin: 0 auto;
}
.Leaderboard .tab .el-row .el-col{
  padding: 0.9rem 0;
}
.Leaderboard .el-row .el-col a{
  color: #333;
  text-decoration: none;
}
.Leaderboard .el-row .active{
  border-bottom: 2px solid #c62f2f;
  margin-bottom: -2px;
}
.Leaderboard .el-row .active a{
  color: #c62f2f;
}
.content{
  padding-top: 20px;
}
.content .title{
  padding: 0.5rem 0;
  border-bottom: 1px solid #d7d7d7;
  font-size: 18px;
}
.content .official .official-content{
  margin-top: 1rem;
}
.content .official .official-content > .el-row{
  margin-bottom: 0.9rem;
}
.content .official .official-content .table{
  border: 1px solid #d7d7d7;
}
.content .official .official-content .table .head{
  font-family: 'iconfont';
  position: relative;
  font-size: 40px;
}
.content .official .official-content .table .head::before{
  content: "\e65c";
  position: absolute;
  top: 30%;
  right: 5%;
  transform: translate(-30%,-5%);
  color: #d7d7d7;
}
.content .official .official-content .table .head:hover::before{
  color: #fff;
}
.content .official .official-content .table .body li{
  padding: 0.3rem 0;
  text-align: center;
}
.content .official .official-content .table .body li:nth-child(2n+1){
  background-color: #f5f5f7;
}
.content .official .official-content .table .body .more{
  text-align: right;
  line-height: 2rem;
}
.content .world .world-content .item{
  text-align: center;
  line-height: 1.5rem;
  margin: 0.8rem 0;
}
.one-line{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
