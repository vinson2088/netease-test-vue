<template>
  <div class="musicList">
    <div class="tab">
      <el-row>
        <el-col :span="4">
          <router-link to="/" class="link-a">个性化推荐</router-link>
        </el-col>
        <el-col :span="4" class="active">
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
      <div class="select-box">
        <div class="selector" v-popover:select>全部歌单 <i class="el-icon-arrow-down"></i></div>
        <el-popover
          placement="bottom-start"
          trigger="click"
          width="700"
          ref="select">
          <div class="pop-main">
            <div class="title">
              <p>添加标签</p>
            </div>
            <div class="select-body">
              <el-row class="allList">
                <el-col :span="24" :class="{ active: choose.All}"><a href="javascript:void(0)" @click="clickCol('All')">全部歌单</a></el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="table-type">
                  <i class="iconfont icon-network"></i>
                  <span>语种</span>
                </el-col>
                <el-col :span="19">
                  <el-row class="table">
                    <el-col :span="4" :class="{ active: choose.Chinese}"><a href="javascript:void(0)" @click="clickCol('Chinese')">华语</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Occident}"><a href="javascript:void(0)" @click="clickCol('Occident')">欧美</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Japanese}"><a href="javascript:void(0)" @click="clickCol('Japanese')">日语</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Korean}"><a href="javascript:void(0)" @click="clickCol('Korean')">韩语</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Cantonese}"><a href="javascript:void(0)" @click="clickCol('Cantonese')">粤语</a></el-col>
                    <el-col :span="4" :class="{ active: choose.SmallLanguage}"><a href="javascript:void(0)" @click="clickCol('SmallLanguage')">小语种</a></el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="table-type">
                  <i class="iconfont icon-fengge"></i>
                  <span>风格</span>
                </el-col>
                <el-col :span="19">
                  <el-row class="table">
                    <el-col :span="4" :class="{ active: choose.Popular}"><a href="javascript:void(0)" @click="clickCol('Popular')">流行</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Rock}"><a href="javascript:void(0)" @click="clickCol('Rock')">摇滚</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Ballad}"><a href="javascript:void(0)" @click="clickCol('Ballad')">民谣</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Electronic}"><a href="javascript:void(0)" @click="clickCol('Electronic')">电子</a></el-col>
                    <el-col :span="4" :class="{ active: choose.DanceMusic}"><a href="javascript:void(0)" @click="clickCol('DanceMusic')">舞曲</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Rap}"><a href="javascript:void(0)" @click="clickCol('Rap')">说唱</a></el-col>
                    <el-col :span="4" :class="{ active: choose.LightMusic}"><a href="javascript:void(0)" @click="clickCol('LightMusic')">轻音乐</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Jazz}"><a href="javascript:void(0)" @click="clickCol('Jazz')">爵士</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Rural}"><a href="javascript:void(0)" @click="clickCol('Rural')">乡村</a></el-col>
                    <el-col :span="4" :class="{ active: choose.RAndB}"><a href="javascript:void(0)" @click="clickCol('RAndB')">R&B/Soul</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Classical}"><a href="javascript:void(0)" @click="clickCol('Classical')">古典</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Nationality}"><a href="javascript:void(0)" @click="clickCol('Nationality')">民族</a></el-col>
                    <el-col :span="4" :class="{ active: choose.England}"><a href="javascript:void(0)" @click="clickCol('England')">英伦</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Metal}"><a href="javascript:void(0)" @click="clickCol('Metal')">金属</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Punk}"><a href="javascript:void(0)" @click="clickCol('Punk')">朋克</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Blues}"><a href="javascript:void(0)" @click="clickCol('Blues')">蓝调</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Reggae}"><a href="javascript:void(0)" @click="clickCol('Reggae')">雷鬼</a></el-col>
                    <el-col :span="4" :class="{ active: choose.MusicWorld}"><a href="javascript:void(0)" @click="clickCol('MusicWorld')">音乐世界</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Latin}"><a href="javascript:void(0)" @click="clickCol('Latin')">拉丁</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Alternative}"><a href="javascript:void(0)" @click="clickCol('Alternative')">另类/独立</a></el-col>
                    <el-col :span="4" :class="{ active: choose.NewAge}"><a href="javascript:void(0)" @click="clickCol('NewAge')">New Age</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Antiquity}"><a href="javascript:void(0)" @click="clickCol('Antiquity')">古风</a></el-col>
                    <el-col :span="4" :class="{ active: choose.AfterShaking}"><a href="javascript:void(0)" @click="clickCol('AfterShaking')">后摇</a></el-col>
                    <el-col :span="4" :class="{ active: choose.BossaNova}"><a href="javascript:void(0)" @click="clickCol('BossaNova')">Bossa Nova</a></el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="table-type">
                  <i class="iconfont icon-coffee"></i>
                  <span>生活</span>
                </el-col>
                <el-col :span="19">
                  <el-row class="table">
                    <el-col :span="4" :class="{ active: choose.EarlyMorning}"><a href="javascript:void(0)" @click="clickCol('EarlyMorning')">清晨</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Night}"><a href="javascript:void(0)" @click="clickCol('Night')">夜晚</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Learn}"><a href="javascript:void(0)" @click="clickCol('Learn')">学习</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Jobs}"><a href="javascript:void(0)" @click="clickCol('Jobs')">工作</a></el-col>
                    <el-col :span="4" :class="{ active: choose.LunchBreak}"><a href="javascript:void(0)" @click="clickCol('LunchBreak')">午休</a></el-col>
                    <el-col :span="4" :class="{ active: choose.AfternoonTea}"><a href="javascript:void(0)" @click="clickCol('AfternoonTea')">下午茶</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Subway}"><a href="javascript:void(0)" @click="clickCol('Subway')">地铁</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Drive}"><a href="javascript:void(0)" @click="clickCol('Drive')">驾车</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Motion}"><a href="javascript:void(0)" @click="clickCol('Motion')">运动</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Travel}"><a href="javascript:void(0)" @click="clickCol('Travel')">旅行</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Walking}"><a href="javascript:void(0)" @click="clickCol('Walking')">散步</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Bar}"><a href="javascript:void(0)" @click="clickCol('Bar')">酒吧</a></el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="table-type">
                  <i class="iconfont icon-face"></i>
                  <span>情感</span>
                </el-col>
                <el-col :span="19">
                  <el-row class="table">
                    <el-col :span="4" :class="{ active: choose.Nostalgic}"><a href="javascript:void(0)" @click="clickCol('Nostalgic')">怀旧</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Fresh}"><a href="javascript:void(0)" @click="clickCol('Fresh')">清新</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Romantic}"><a href="javascript:void(0)" @click="clickCol('Romantic')">浪漫</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Sexy}"><a href="javascript:void(0)" @click="clickCol('Sexy')">性感</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Sad}"><a href="javascript:void(0)" @click="clickCol('Sad')">伤感</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Cure}"><a href="javascript:void(0)" @click="clickCol('Cure')">治愈</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Relax}"><a href="javascript:void(0)" @click="clickCol('Relax')">放松</a></el-col>
                    <el-col :span="4" :class="{ active: choose.lonely}"><a href="javascript:void(0)" @click="clickCol('lonely')">孤独</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Moving}"><a href="javascript:void(0)" @click="clickCol('Moving')">感动</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Excited}"><a href="javascript:void(0)" @click="clickCol('Excited')">兴奋</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Happy}"><a href="javascript:void(0)" @click="clickCol('Happy')">快乐</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Quiet}"><a href="javascript:void(0)" @click="clickCol('Quiet')">安静</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Miss}"><a href="javascript:void(0)" @click="clickCol('Miss')">思念</a></el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="table-type">
                  <i class="iconfont icon-zhuti"></i>
                  <span>主题</span>
                </el-col>
                <el-col :span="19">
                  <el-row class="table">
                    <el-col :span="4" :class="{ active: choose.MovieSoundtrack}"><a href="javascript:void(0)" @click="clickCol('MovieSoundtrack')">影视原声</a></el-col>
                    <el-col :span="4" :class="{ active: choose.ACG}"><a href="javascript:void(0)" @click="clickCol('ACG')">ACG</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Child}"><a href="javascript:void(0)" @click="clickCol('Child')">儿童</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Campus}"><a href="javascript:void(0)" @click="clickCol('Campus')">校园</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Game}"><a href="javascript:void(0)" @click="clickCol('Game')">游戏</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Seventy}"><a href="javascript:void(0)" @click="clickCol('Seventy')">70后</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Eighty}"><a href="javascript:void(0)" @click="clickCol('Eighty')">80后</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Ninety}"><a href="javascript:void(0)" @click="clickCol('Ninety')">90后</a></el-col>
                    <el-col :span="4" :class="{ active: choose.NetworkSong}"><a href="javascript:void(0)" @click="clickCol('NetworkSong')">网络歌曲</a></el-col>
                    <el-col :span="4" :class="{ active: choose.KTV}"><a href="javascript:void(0)" @click="clickCol('KTV')">KTV</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Classic}"><a href="javascript:void(0)" @click="clickCol('Classic')">经典</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Cover}"><a href="javascript:void(0)" @click="clickCol('Cover')">翻唱</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Piano}"><a href="javascript:void(0)" @click="clickCol('Piano')">钢琴</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Guitar}"><a href="javascript:void(0)" @click="clickCol('Guitar')">吉他</a></el-col>
                    <el-col :span="4" :class="{ active: choose.InstrumentalMusic}"><a href="javascript:void(0)" @click="clickCol('InstrumentalMusic')">器乐</a></el-col>
                    <el-col :span="4" :class="{ active: choose.List}"><a href="javascript:void(0)" @click="clickCol('List')">榜单</a></el-col>
                    <el-col :span="4" :class="{ active: choose.Zero}"><a href="javascript:void(0)" @click="clickCol('Zero')">00后</a></el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-popover>
      </div>
      <div class="tag">
        <span class="tags">热门标签：</span>
        <a class="tags" href="javascript:void(0)">华语</a>
        <a class="tags" href="javascript:void(0)">流行</a>
        <a class="tags" href="javascript:void(0)">摇滚</a>
        <a class="tags" href="javascript:void(0)">民谣</a>
        <a class="tags" href="javascript:void(0)">电子</a>
        <a class="tags" href="javascript:void(0)">轻音乐</a>
        <a class="tags" href="javascript:void(0)">影视原声</a>
        <a class="tags" href="javascript:void(0)">ACG</a>
        <a class="tags" href="javascript:void(0)">怀旧</a>
        <a class="tags" href="javascript:void(0)">治愈</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'musicList',
  data () {
    return {
      choose: {
        All: true,
        Chinese: false,
        Occident: false,
        Japanese: false,
        Korean: false,
        Cantonese: false,
        SmallLanguage: false,
        Popular: false,
        Rock: false,
        Ballad: false,
        Electronic: false,
        DanceMusic: false,
        Rap: false,
        LightMusic: false,
        Jazz: false,
        Rural: false,
        RAndB: false,
        Classical: false,
        Nationality: false,
        England: false,
        Metal: false,
        Punk: false,
        Blues: false,
        Reggae: false,
        MusicWorld: false,
        Latin: false,
        Alternative: false,
        NewAge: false,
        Antiquity: false,
        AfterShaking: false,
        BossaNova: false,
        EarlyMorning: false,
        Night: false,
        Learn: false,
        Jobs: false,
        LunchBreak: false,
        AfternoonTea: false,
        Subway: false,
        Drive: false,
        Motion: false,
        Travel: false,
        Walking: false,
        Bar: false,
        Nostalgic: false,
        Fresh: false,
        Romantic: false,
        Sexy: false,
        Sad: false,
        Cure: false,
        Relax: false,
        lonely: false,
        Moving: false,
        Excited: false,
        Happy: false,
        Quiet: false,
        Miss: false,
        MovieSoundtrack: false,
        ACG: false,
        Child: false,
        Campus: false,
        Game: false,
        Seventy: false,
        Eighty: false,
        Ninety: false,
        NetworkSong: false,
        KTV: false,
        Classic: false,
        Cover: false,
        Piano: false,
        Guitar: false,
        InstrumentalMusic: false,
        List: false,
        Zero: false
      }
    }
  },
  methods: {
    clickCol (txt) {
      for (let item in this.choose) {
        this.choose[item] = false
      }
      this.choose[txt] = true
    }
  }
}
</script>
<style scoped>
.musicList .tab{
  border-bottom: 2px solid #d7d7d7;
  text-align: center;
}
.musicList .tab .el-row{
  width: 70%;
  margin: 0 auto;
}
.musicList .tab .el-row .el-col{
  padding: 0.9rem 0;
}
.musicList .el-row .el-col a{
  color: #333;
  text-decoration: none;
}
.musicList .el-row .active{
  border-bottom: 2px solid #c62f2f;
  margin-bottom: -2px;
}
.musicList .el-row .active a{
  color: #c62f2f;
}
.content{
  padding-top: 20px;
}
.content .selector{
  display: inline-block;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  padding: 0.3rem 0.4rem;
  font-size: 12px;
  background-color: #fff;
  cursor: pointer;
}
.content .tag{
  margin-top: 1rem;
}
.content .tags{
  display: inline-block;
  border-right: 1px solid #d7d7d7;
  padding: 0 0.6rem;
  color: #666;
  text-decoration: none;
}
.content .tags:first-child{
  padding: 0;
}
.content .tags:first-child,.content .tags:last-child{
  border-right: none;
}
.el-popper .pop-main{
  max-height: 450px;
  overflow-y: auto;
}
.el-popper .pop-main::-webkit-scrollbar{
  width: 8px;
}
.el-popper .pop-main::-webkit-scrollbar-track{
  border-radius: 10px;
  background-color: #F5F5F5;
}
.el-popper .pop-main::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: #d7d7d7;
}
.el-popper .title{
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #d7d7d7;
}
.el-popper .select-body > .el-row{
  margin: 0.5rem 0;
}
.el-popper .allList{
  text-align: center;
}
.el-popper .table-type{
  font-size: 18px;
  color: #c62f2f;
}
.el-popper .table-type .iconfont{
  font-size: 22px;
}
.el-popper .table{
  border-top: 1px solid #d7d7d7;
  border-left: 1px solid #d7d7d7;
}
.el-popper .table .el-col{
  border-right: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
  text-align: center;
}
.el-popper .allList .el-col{
  border: 1px solid #d7d7d7;
}
.el-popper .select-body{
  padding: 0 1rem;
}
.el-popper .select-body .el-col a{
  display: block;
  color: #666;
  text-decoration: none;
  padding: 0.5rem 0;
}
.el-popper .select-body .active{
  position: relative;
  font-family: 'element-icons';
}
.el-popper .select-body .active::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #c62f2f;
}
.el-popper .select-body .active::after{
  content: '\E62D';
  color: #c62f2f;
  position: absolute;
  bottom: -10px;
  right: -8px;
  background-color: #fff;
}
</style>
