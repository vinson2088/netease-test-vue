<template>
  <div class="radio">
    <div class="tab">
      <el-row>
        <el-col :span="4">
          <router-link to="/" class="link-a">个性化推荐</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/musicList" class="link-a">歌单</router-link>
        </el-col>
        <el-col :span="4" class="active">
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
      <div class="slide">
        <a href="javascript:void(0)" @click="slideClick(1)" class="slide-btn-left el-icon-arrow-left" v-show="slideBtnLeft"></a>
        <div class="tabs-box">
          <el-row class="tabs" :class="{'transition-1': transition_1, 'transition-2': transition_2}">
            <el-col :span="8">
              <el-row>
                <el-col :span="3" class="active">
                  <p class="iconfont icon-Leaderboard"></p>
                  <span>排行榜</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-microphone"></p>
                  <span>创作|翻唱</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-headset"></p>
                  <span>3D|电子</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-face"></p>
                  <span>情感调频</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-musicb"></p>
                  <span>音乐故事</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-Bear"></p>
                  <span>二次元</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-book"></p>
                  <span>有声书</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-light-bulb"></p>
                  <span>知识技能</span>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-row>
                <el-col :span="3">
                  <p class="iconfont icon-Line-table"></p>
                  <span>商业财经</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-feather"></p>
                  <span>人文历史</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-abc"></p>
                  <span>外语世界</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-Bottle"></p>
                  <span>亲子宝贝</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-fan"></p>
                  <span>相声曲艺</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-books"></p>
                  <span>美文读物</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-talkshow"></p>
                  <span>脱口秀</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-radio"></p>
                  <span>广播剧</span>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-row>
                <el-col :span="3">
                  <p class="iconfont icon-Anchor"></p>
                  <span>明星做主播</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-Pentagram"></p>
                  <span>娱乐|影视</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-Planet"></p>
                  <span>科技科学</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-Bachelor-cap"></p>
                  <span>校园|教育</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-plane"></p>
                  <span>旅途|城市</span>
                </el-col>
                <el-col :span="3">
                  <p class="iconfont icon-question-mark"></p>
                  <span>我要做主播</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <a href="javascript:void(0)" @click="slideClick(0)" class="slide-btn-right el-icon-arrow-right" v-show="slideBtnRight"></a>
      </div>
      <div class="boutique">
        <p class="title">付费精品 <router-link to="/musicList" class="more">更多 <i class="el-icon-arrow-right"></i></router-link></p>
        <div class="boutiqueList">
          <el-row>
            <el-col :span="12">
              <el-row :gutter="20" class="list-content">
                <el-col :span="8">
                  <img src="../../static/images/img-1.png" alt="" width="100%">
                </el-col>
                <el-col :span="16">
                  <p class="radio-name">死亡万花筒 第二季</p>
                  <p class="radio-description">门内世界挑战难度再次升级</p>
                  <p class="radio-description"><i class="iconfont icon-play"></i>死亡万花筒 第二季·第二集</p>
                  <p class="price">￥32.9</p>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row :gutter="20" class="list-content">
                <el-col :span="8">
                  <img src="../../static/images/img-2.png" alt="" width="100%">
                </el-col>
                <el-col :span="16">
                  <p class="radio-name">用催眠告别失眠</p>
                  <p class="radio-description">科学摆脱失眠的困扰</p>
                  <p class="radio-description"><i class="iconfont icon-play"></i>综合催眠训练七（完结）</p>
                  <p class="price">￥99</p>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-row :gutter="20" class="list-content">
                <el-col :span="8">
                  <img src="../../static/images/img-4.png" alt="" width="100%">
                </el-col>
                <el-col :span="16">
                  <p class="radio-name">工作放松冥想</p>
                  <p class="radio-description">缓解焦虑 高效午休 提升专注力</p>
                  <p class="radio-description"><i class="iconfont icon-play"></i>午休冥想（完结）</p>
                  <p class="price">￥12</p>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row :gutter="20" class="list-content">
                <el-col :span="8">
                  <img src="../../static/images/img-3.png" alt="" width="100%">
                </el-col>
                <el-col :span="16">
                  <p class="radio-name">欧丽娟·醉美古诗词</p>
                  <p class="radio-description">台大“女神”教师的沉浸式诗词课</p>
                  <p class="radio-description"><i class="iconfont icon-play"></i>【25】古诗十九首（一）死生新故：生命短暂与及时行乐</p>
                  <p class="price">￥98</p>
                </el-col>
              </el-row>
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
  name: 'radio',
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
      transition_1: false,
      transition_2: false,
      slideBtnLeft: false,
      slideBtnRight: true,
      slideIndex: 0
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
  },
  methods: {
    slideClick (direction) {
      if (direction === 0) {
        if (this.slideIndex === 0) {
          this.transition_1 = true
          this.transition_2 = false
          this.slideBtnLeft = true
          this.slideBtnRight = true
          this.slideIndex = 1
        } else if (this.slideIndex === 1) {
          this.transition_1 = false
          this.transition_2 = true
          this.slideBtnLeft = true
          this.slideBtnRight = false
          this.slideIndex = 2
        }
      } else {
        if (this.slideIndex === 2) {
          this.transition_1 = true
          this.transition_2 = false
          this.slideBtnLeft = true
          this.slideBtnRight = true
          this.slideIndex = 1
        } else if (this.slideIndex === 1) {
          this.transition_1 = false
          this.transition_2 = false
          this.slideBtnLeft = false
          this.slideBtnRight = true
          this.slideIndex = 0
        }
      }
    }
  }
}
</script>
<style>
@import url(../../static/css/certify.css);
@import url(../../static/css/swiper.min.css);
</style>
<style scoped>
.radio .tab{
  border-bottom: 2px solid #d7d7d7;
  text-align: center;
}
.radio .tab .el-row{
  width: 70%;
  margin: 0 auto;
}
.radio .tab .el-row .el-col{
  padding: 0.9rem 0;
}
.radio .el-row .el-col a{
  color: #333;
  text-decoration: none;
}
.radio .el-row .active{
  border-bottom: 2px solid #c62f2f;
  margin-bottom: -2px;
}
.radio .el-row .active a{
  color: #c62f2f;
}
.content{
  padding-top: 20px;
}
.content .slide{
  position: relative;
  margin-top: 1rem;
}
.content .slide .slide-btn-left{
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  text-decoration: none;
  color: #666;
  font-size: 30px;
}
.content .slide .slide-btn-right{
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  text-decoration: none;
  color: #666;
  font-size: 30px;
}
.content .tabs-box{
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
}
.content .tabs-box .tabs{
  width: 300%;
  text-align: center;
  transition: all 1s;
}
.content .tabs-box .tabs .active{
  color: #c62f2f
}
.content .tabs-box .tabs .el-col .iconfont{
  font-size: 30px;
}
.content .boutique .title{
  font-size: 17px;
  padding: 0.3rem 0;
  border-bottom: 2px solid #d7d7d7;
}
.content .boutique .title .more{
  float: right;
  color: #555;
  text-decoration: none;
  font-size: 14px;
}
.content .boutique .boutiqueList{
  margin-top: 1rem;
  line-height: 1.7rem;
}
.content .boutique .boutiqueList .el-row{
  margin: 0.5rem 0;
}
.content .boutique .boutiqueList .list-content .radio-name{
  font-size: 17px;
  margin: 0.4rem 0;
}
.content .boutique .boutiqueList .list-content .radio-description{
  color: #999;
  font-size: 13px;
  line-height: 1.2rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.content .boutique .boutiqueList .list-content .price{
  font-size: 20px;
  color: #c62f2f;
  padding: 0.6rem 0;
}
.transition-1{
  transform: translateX(-33.333%);
}
.transition-2{
  transform: translateX(-66.666%);
}
</style>
