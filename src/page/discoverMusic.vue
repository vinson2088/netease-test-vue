<template>
  <div class="discover">
    <div class="tab">
      <el-row>
        <el-col :span="4" class="active">
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
        <el-col :span="4">
          <router-link to="/singer" class="link-a">歌手</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/LatestMusic" class="link-a">最新音乐</router-link>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div id="certify">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in imgList" :key="index">
              <img :src="item" />
            </div>
          </div>
        </div>
        <div class="swiper-pagination" ref="imgPagination"></div>
      </div>
      <div class="recommended-song-list">
        <p class="title">推荐歌单 <router-link to="/musicList" class="more">更多 <i class="el-icon-arrow-right"></i></router-link></p>
        <div class="songList">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/daily-song.png" alt="" width="100%">
                  <span class="week">{{weeknum}}</span>
                  <p class="date">{{day}}</p>
                </div>
                <p>每日歌曲推荐</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic8.png" alt="" width="100%">
                </div>
                <p>陈奕迅精选粤语48首</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic2.png" alt="" width="100%">
                </div>
                <p>开往春天的地铁</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic3.png" alt="" width="100%">
                </div>
                <p>“若是心怀旧梦 就别再无疾而终”</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic4.png" alt="" width="100%">
                </div>
                <p>听歌最怕应景，睹物最怕思人</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic5.png" alt="" width="100%">
                </div>
                <p>2018霍格沃兹魔法学校毕业歌单</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic6.png" alt="" width="100%">
                </div>
                <p>【高燃】游戏视频精彩集锦常用BGM</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="img">
                  <img src="../../static/images/pic7.png" alt="" width="100%">
                </div>
                <p>视频制作背景音乐</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from '../../static/js/swiper.min.js'
/* eslint-disable no-new */
export default {
  name: 'discoverMusic',
  data () {
    return {
      imgList: [
        '../../static/images/banner.png',
        '../../static/images/banner.png',
        '../../static/images/banner.png',
        '../../static/images/banner.png',
        '../../static/images/banner.png',
        '../../static/images/banner.png',
        '../../static/images/banner.png',
        '../../static/images/banner.png',
        '../../static/images/banner.png'
      ],
      day: 0,
      week: 0
    }
  },
  mounted () {
    new Swiper('#certify .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      on: {
        progress: function (progress) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            var slideProgress = this.slides[i].progress
            var modify = 1
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
            }
            var translate = slideProgress * modify * 260 + 'px'
            var scale = 1 - Math.abs(slideProgress) / 5
            var zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
            slide.transform('translateX(' + translate + ') scale(' + scale + ')')
            slide.css('zIndex', zIndex)
            slide.css('opacity', 1)
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0)
            }
          }
        },
        setTransition: function (transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition)
          }
        }
      }
    })
    let date = new Date()
    this.day = date.getDate()
    this.week = date.getDay()
  },
  computed: {
    weeknum: function () {
      let weekArray = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
      let weeks = this.week - 1
      return weekArray[weeks]
    }
  }
}
</script>
<style>
@import url(../../static/css/certify.css);
@import url(../../static/css/swiper.min.css);
</style>

<style scoped>
.discover .tab{
  border-bottom: 2px solid #d7d7d7;
  text-align: center;
}
.discover .tab .el-row{
  width: 70%;
  margin: 0 auto;
}
.discover .el-row .el-col{
  padding: 0.9rem 0;
}
.discover .el-row a{
  color: #333;
  text-decoration: none;
}
.discover .el-row .active{
  border-bottom: 2px solid #c62f2f;
  margin-bottom: -2px;
}
.discover .el-row .active a{
  color: #c62f2f;
}
.content{
  padding-top: 20px;
}
.content .recommended-song-list .title{
  font-size: 17px;
  padding: 0.3rem 0;
  border-bottom: 2px solid #d7d7d7;
}
.content .recommended-song-list .title .more{
  float: right;
  color: #555;
  text-decoration: none;
  font-size: 14px;
}
.content .songList .img{
  position: relative;
}
.content .songList .week{
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%,-10%);
}
.content .songList .date{
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%,-60%);
  font-size: 100px;
  color: #c62f2f;
}
</style>
