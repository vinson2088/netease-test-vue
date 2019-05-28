<template>
  <el-row class="top" type="flex" justify="space-between">
    <el-col :span="3">
      <el-row class="logo">
        <el-col :span="4" class="img"><img src="../../static/images/logo.png" alt="" width="100%"></el-col>
        <el-col :span="20"><span>网易云音乐</span></el-col>
      </el-row>
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <el-col :span="1" class="btns1">
      <a href="javascript:void(0)" class="btn"><i class="iconfont icon-back"></i></a>
      <a href="javascript:void(0)" class="btn"><i class="iconfont icon-advance"></i></a>
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <el-col :span="6" class="search-box">
      <input type="text" placeholder="搜索音乐，视频，歌词，电台" class="search">
      <i class="iconfont icon-search"></i>
    </el-col>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="4">
      <el-popover
        placement="bottom"
        width="300"
        trigger="click"
        ref="account">
        <div>
          <el-row type="flex" justify="space-between" class="item-center">
            <el-col :span="16">
              <el-row type="flex" justify="space-around" class="item-center">
                <el-col :span="6">
                  <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                </el-col>
                <el-col :span="18">
                  我的账户名
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="8" class="check-in">
              <a href="#" class="btn">签到</a>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around" class="item-center personal-item">
            <el-col :span="8">
              <p class="num">0</p>
              <p>动态</p>
            </el-col>
            <el-col :span="8">
              <p class="num">0</p>
              <p>关注</p>
            </el-col>
            <el-col :span="8">
              <p class="num">0</p>
              <p>粉丝</p>
            </el-col>
          </el-row>
          <ul class="box">
            <li>
              <i class="iconfont icon-diamond"></i>
              <span>会员中心</span>
              <span class="right">未订购</span>
            </li>
            <li>
              <i class="iconfont icon-level"></i>
              <span>等级</span>
              <span class="right">Lv.8</span>
            </li>
            <li>
              <i class="iconfont icon-shopping-cart"></i>
              <span>商城</span>
              <span class="new">new</span>
            </li>
          </ul>
          <ul class="box">
            <li>
              <i class="iconfont icon-Setting"></i>
              <span>个人信息设置</span>
            </li>
            <li>
              <i class="iconfont icon-phone"></i>
              <span>绑定社交账号</span>
              <span class="right"><i class="iconfont icon-weibo"></i><i class="iconfont icon-yixin"></i></span>
            </li>
          </ul>
          <ul class="box">
            <li>
              <i class="iconfont icon-quit"></i>
              <span>退出登录</span>
            </li>
          </ul>
        </div>
      </el-popover>
      <el-row v-popover:account>
        <el-col :span="3" class="img">
          <a href="#"><img src="../../static/images/logo.png" alt="" width="100%"></a>
        </el-col>
        <el-col :span="21">
          <a href="#" class="txt">我的账户名 <i class="iconfont icon-below-s"></i></a>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="1">
      <el-popover
        placement="bottom"
        width="350"
        trigger="click"
        ref="pifu">
        <el-tabs v-model="pifuTab">
          <el-tab-pane label="主题" name="first">
            <el-row :gutter="10">
              <el-col :span="8">
                <img src="../../static/images/color-black.png" alt="" width="100%">
              </el-col>
              <el-col :span="8">
                <img src="../../static/images/color-red.png" alt="" width="100%">
              </el-col>
              <el-col :span="8">
                <img src="../../static/images/color-pick.png" alt="" width="100%">
              </el-col>
              <el-col :span="8">
                <img src="../../static/images/color-blue.png" alt="" width="100%">
              </el-col>
              <el-col :span="8">
                <img src="../../static/images/color-green.png" alt="" width="100%">
              </el-col>
              <el-col :span="8">
                <img src="../../static/images/color-gold.png" alt="" width="100%">
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="纯色" name="second">
            <el-row :gutter="10">
              <el-col :span="4">
                <div class="color-block color-pick1"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-pick2"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-pick3"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-blue1"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-blue2"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-blue3"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-green1"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-green2"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-yellow"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-orange"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-light-red"></div>
              </el-col>
              <el-col :span="4">
                <div class="color-block color-red"></div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-popover>
      <a href="javascript:void(0)" class="btn" v-popover:pifu><i class="iconfont icon-pifu"></i></a>
    </el-col>
    <el-col :span="1">
      <el-popover
        placement="bottom"
        width="400"
        trigger="click"
        ref="notice">
        <div>
          <div class="notice-tabs" ref="noticeTabBox">
            <a href="javascript:void(0)" @click="noticeClick('0')" class="tab" :class="{ active:nowNotice === 0}">私信</a>
            <a href="javascript:void(0)" @click="noticeClick('1')" class="tab" :class="{ active:nowNotice === 1}">评论</a>
            <a href="javascript:void(0)" @click="noticeClick('2')" class="tab" :class="{ active:nowNotice === 2}">@我</a>
            <a href="javascript:void(0)" @click="noticeClick('3')" class="tab" :class="{ active:nowNotice === 3}">通知</a>
            <div class="clearfix"></div>
          </div>
          <div class="notice-content" ref="noticeContent">
            <ul class="first" :class="{ active:nowNotice === 0}">
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">发件人姓名</a>
                      <span class="time">2月2日</span>
                    </p>
                    <p>私信内容私信内容私信内容私信内容私信内容私信内容私信内容私信内容私信内容</p>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">发件人姓名</a>
                      <span class="time">2月1日</span>
                    </p>
                    <p>私信内容私信内容私信内容私信内容私信内容私信内容私信内容私信内容私信内容</p>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">发件人姓名</a>
                      <span class="time">1月27日</span>
                    </p>
                    <p>私信内容私信内容私信内容私信内容私信内容私信内容私信内容私信内容私信内容</p>
                  </el-col>
                </el-row>
              </li>
            </ul>
            <ul class="second" :class="{ active:nowNotice === 1}">
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">评论人姓名</a>
                      <span class="time">2月2日</span>
                    </p>
                    <p>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">评论人姓名</a>
                      <span class="time">2月1日</span>
                    </p>
                    <p>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">评论人姓名</a>
                      <span class="time">1月27日</span>
                    </p>
                    <p>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
                  </el-col>
                </el-row>
              </li>
            </ul>
            <ul class="third" :class="{ active:nowNotice === 2}">
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">@我的人姓名</a>
                      <span class="time">2月2日</span>
                    </p>
                    <p>@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容</p>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">@我的人姓名</a>
                      <span class="time">2月1日</span>
                    </p>
                    <p>@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容</p>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">@我的人姓名</a>
                      <span class="time">1月27日</span>
                    </p>
                    <p>@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容@我的内容</p>
                  </el-col>
                </el-row>
              </li>
            </ul>
            <ul class="fourth" :class="{ active:nowNotice === 3}">
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">通知人姓名</a>
                      <span class="time">2月2日</span>
                    </p>
                    <p>通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容</p>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">通知人姓名</a>
                      <span class="time">2月1日</span>
                    </p>
                    <p>通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容</p>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="3">
                    <span class="img"><img src="../../static/images/logo.png" alt="" width="100%"></span>
                  </el-col>
                  <el-col :span="21">
                    <p>
                      <a href="#" class="name">通知人姓名</a>
                      <span class="time">1月27日</span>
                    </p>
                    <p>通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容</p>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </div>
        </div>
      </el-popover>
      <a href="javascript:void(0)" class="btn" v-popover:notice><i class="iconfont icon-Notice"></i></a>
    </el-col>
    <el-col :span="1">
      <a href="javascript:void(0)" class="btn"><i class="iconfont icon-Setting"></i></a>
    </el-col>
    <el-col :span="1">
      <a href="javascript:void(0)" class="btn" @click="topbtnClick"><i class="iconfont icon-minimize"></i></a>
    </el-col>
    <el-col :span="1">
      <a href="javascript:void(0)" class="btn" @click="topbtnClick"><i class="iconfont icon-maximize"></i></a>
    </el-col>
    <el-col :span="1">
      <a href="javascript:void(0)" class="btn" @click="topbtnClick"><i class="iconfont icon-close"></i></a>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'top',
  data () {
    return {
      pifuTab: 'first',
      clickTime: 0,
      noticeTab: 'first',
      nowNotice: 0
    }
  },
  methods: {
    topbtnClick () {
      switch (this.clickTime) {
        case 0:
          this.$alert('傻了吧，这是网页啊！', {
            confirmButtonText: '确定'
          })
          this.clickTime++
          break
        case 1:
          this.$alert('又点？都说了是网页，网页啊！', {
            confirmButtonText: '确定'
          })
          this.clickTime++
          break
        case 2:
          this.$alert('还点？？？算了懒得说你了', {
            confirmButtonText: '确定'
          })
          break
      }
    },
    noticeClick (index) {
      index = index - 0
      this.nowNotice = index
    }
  }
}
</script>
<style scoped>
.top{
  padding: 0 10px;
  background-color: #c62f2f;
  color: #fff;
  align-items: center;
}
.top a{
  color: #eec1c1;
  text-decoration: none;
}
.el-col{
  padding: 0.6rem 0;
}
.el-col .el-col{
  padding: 0;
}
.iconfont{
  font-size: 17px;
}
.btns1{
  border: 1px solid #a82828;
  border-radius: 5px;
  padding: 0.1rem 0.2rem;
}
.btns1 .btn{
  float: left;
  width: 50%;
}
.btns1 .btn:last-child{
  border-left: 1px solid #a82828;
}
.btns1 .btn .iconfont{
  font-size: 12px;
}
.search-box{
  position: relative;
}
.search-box .search{
  border: none;
  outline: none;
  background-color: #a82828;
  border-radius: 20px;
  padding: 5px 10px;
  width: 100%;
  color: #fff;
}
.search-box .search::-webkit-input-placeholder{
  color: #c77373;
}
.search-box .iconfont{
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #c77373;
}
.item-center{
  align-items: center;
}
.el-popper .el-col{
  padding: 0;
}
.el-popper .personal-item{
  text-align: center;
  padding: 0.6rem 0 1.2rem 0;
}
.el-popper .check-in{
  text-align: center;
}
.el-popper .check-in .btn{
  background-color: #c62f2f;
  color: #fff;
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
}
.el-popper .box{
  border-top: 1px solid #d7d7d7;
  margin-left: -12px;
  margin-right: -12px;
}
.el-popper .box li{
  line-height: 40px;
  padding: 0 20px;
  position: relative;
  font-family: 'iconfont'
}
.el-popper .box:last-child li{
  margin-bottom: -0.8rem;
  line-height: 55px;
}
.el-popper .box li::before{
  content: '\e600';
  float: right;
}
.el-popper .box .right{
  float: right;
  margin-right: 0.4rem;
}
.el-popper .box .new{
  background-color: #c62f2f;
  color: #fff;
  border-radius: 20px;
  padding: 0.1rem 0.6rem;
}
.el-popper .box .right .iconfont{
  margin: 0 0.2rem;
}
.el-popper .el-tabs .el-col{
  padding: 5px;
}
.el-popper .el-tabs .el-col .color-block{
  height: 54px;
}
.el-popper .notice-tabs{
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
}
.el-popper .notice-tabs .tab{
  padding: 0.4rem 0.8rem;
  border-left: 1px solid #d7d7d7;
  color: #666;
  text-align: center;
  text-decoration: none;
  float: left;
  width: 25%;
}
.el-popper .notice-tabs .tab.active{
  background-color: #7c7d85;
  color: #fff;
}
.el-popper .notice-tabs .tab:first-child{
  border-left: none;
}
.el-popper .notice-content ul{
  display: none;
  margin-top: 1.5rem;
}
.el-popper .notice-content ul.active{
  display: block;
}
.el-popper .notice-content ul li{
  margin: 0.5rem 0;
}
.el-popper .notice-content ul p{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  color: #333;
}
.el-popper .notice-content ul p .name{
  color: #0c73c2;
  text-decoration: none;
}
.el-popper .notice-content ul p .time{
  float: right;
  color: #666;
}
.color-pick1{
  background-color: #ff5c8a;
}
.color-pick2{
  background-color: #ff7a9e;
}
.color-pick3{
  background-color: #fe76c8;
}
.color-blue1{
  background-color: #717ff9;
}
.color-blue2{
  background-color: #4791eb;
}
.color-blue3{
  background-color: #39afea;
}
.color-green1{
  background-color: #2bb669;
}
.color-green2{
  background-color: #6acc19;
}
.color-yellow{
  background-color: #e2ab12;
}
.color-orange{
  background-color: #ff8f57
}
.color-light-red{
  background-color: #fd726d;
}
.color-red{
  background-color: #fd544e;
}
</style>
