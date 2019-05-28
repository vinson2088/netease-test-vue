<template>
  <div class="player-box">
    <el-row class="player" type="flex" justify="space-around">
      <el-col :span="5">
        <el-row  type="flex" justify="space-between" class="play-btn-box">
          <el-col :span="8"><a href="javascript:void(0)" class="btn" @click="prevSong"><i class="iconfont icon-before"></i></a></el-col>
          <el-col :span="8"><a href="javascript:void(0)" class="btn" @click="playMusic"><i class="iconfont icon-play" v-show="!playing"></i><i class="iconfont icon-purse" v-show="playing"></i></a></el-col>
          <el-col :span="8"><a href="javascript:void(0)" class="btn" @click="nextSong"><i class="iconfont icon-next"></i></a></el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <audio autoplay ref="audios" :src="musicUrl" @loadedmetadata="getMusicInformation"></audio>
        <el-row>
          <el-col :span="3">{{currentTimes}}</el-col>
          <el-col :span="18" class="processBar">
            <el-progress :percentage="schedule" color="#c62f2f"></el-progress>
            <div class="point" :style="{left:'calc('+schedule+'% - 5px)'}"></div>
            <div class="cover" @click="changeProgress($event,'song')" @mousedown="slider($event,'song')" @mouseup="clearSlider($event)"></div>
          </el-col>
          <el-col :span="3" class="allTime">{{durationTime}}</el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="4">
            <i class="iconfont icon-sound"></i>
          </el-col>
          <el-col :span="20" class="processBar">
            <el-progress :percentage="sound" color="#c62f2f"></el-progress>
            <div class="point" :style="{left:'calc('+sound+'% - 5px)'}"></div>
            <div class="cover" @click="changeProgress($event,'sound')" @mousedown="slider($event,'sound')" @mouseup="clearSlider($event)"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="1">
        <a href="javascript:void(0)" class="btn" @click="PlayModeChange"><i class="iconfont icon-random" ref="playMode"></i></a>
      </el-col>
      <el-col :span="1">
        <a href="javascript:void(0)" class="btn">词</a>
      </el-col>
      <el-col :span="1">
        <a href="javascript:void(0)" class="btn playList" @click="playListShow = !playListShow">
          <i class="iconfont icon-plist"></i>
        </a>
      </el-col>
    </el-row>
    <div class="playListBox" v-show="playListShow">
      <div class="list-top">
        <div class="btns">
          <a href="javascript:void(0)" class="list-btn" :class="{ active:listNum === 0}"></a>
          <a href="javascript:void(0)" class="list-btn" :class="{ active:listNum === 1}"></a>
        </div>
      </div>
      <div class="list-content">
        <div class="content-top">
          <el-table height="400" stripe :data="tableData">
            <el-table-column prop="name" label="歌名"></el-table-column>
            <el-table-column prop="singer" label="歌手名"></el-table-column>
            <el-table-column prop="time" label="时长"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="playInformationBox">
      <el-row>
        <el-col :span="5" class="informationBox">
          <el-row type="flex" justify="space-between" :gutter="10">
            <el-col :span="8">
              <img src="../../static/images/pic2.png" alt="" width="100%">
            </el-col>
            <el-col :span="12">
              <p class="song-name">{{this.playList[this.playingSong].name}}</p>
              <p class="singer">{{this.playList[this.playingSong].singer}}</p>
            </el-col>
            <el-col :span="4">
              <p><i class="iconfont icon-like"></i></p>
              <p><i class="iconfont icon-share"></i></p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'player',
  data () {
    return {
      nowPlayMode: 0,
      listNum: 0,
      tableData: [],
      playListShow: false,
      durationTime: '',
      durationTimeSecond: '',
      currentTimes: '00:00',
      musicUrl: '',
      schedule: 0,
      sound: 100,
      playing: false,
      playList: [
        {
          name: '雪の華',
          id: '625096',
          singer: '中岛美嘉'
        },
        {
          name: '倾城',
          id: '27867449',
          singer: '陈奕迅'
        },
        {
          name: 'immortal',
          id: '2061739',
          singer: 'Thomas Bergersen'
        },
        {
          name: 'five hundred mile',
          id: '27759600',
          singer: 'Justin Timberlake/Carey Mulligan/Stark Sands'
        }
      ],
      playingSong: 0,
      firstLoad: true
    }
  },
  mounted () {
    this.getMusic(this.playList[this.playingSong].id)
  },
  methods: {
    getMusic (id) {
      let url = 'https://api.imjad.cn/cloudmusic/?type=song&id=' + id + '&br=128000'
      this.$http.get(url).then(res => {
        this.musicUrl = res.data.data[0].url
        console.log(res.data)
      })
    },
    PlayModeChange () {
      let icon = this.$refs.playMode
      let modeArr = ['random', 'order', 'cycle', 'single-cycle']
      let num = this.nowPlayMode
      let numNext = num + 1
      let now = modeArr[num]
      if (numNext === 4) {
        numNext = 0
      }
      let after = modeArr[numNext]
      let EleClassName = icon.className
      EleClassName = EleClassName.replace(now, after)
      icon.className = EleClassName
      this.nowPlayMode = numNext
    },
    changeProgress (event, pro) {
      let clickXX = event.layerX
      let eleWidth = event.srcElement.offsetWidth
      let audioEle = this.$refs.audios
      // debugger
      if (pro === 'song') {
        this.schedule = Math.round(clickXX / eleWidth * 1000) / 10
        let schedules = Math.round(this.durationTimeSecond * this.schedule / 100)
        audioEle.currentTime = schedules
      } else if (pro === 'sound') {
        this.sound = Math.round(clickXX / eleWidth * 1000) / 10
        audioEle.volume = this.sound / 100
      }
    },
    slider (e, pro) {
      let clickX = e.layerX
      let EleWidth = e.srcElement.offsetWidth
      if (pro === 'song') {
        this.currentTime = Math.round(clickX / EleWidth * 1000) / 10
      } else if (pro === 'sound') {
        this.sound = Math.round(clickX / EleWidth * 1000) / 10
      }
      let Ele = e.srcElement
      let that = this
      Ele.onmousemove = function (event) {
        that.changeProgress(event, pro)
      }
    },
    clearSlider (e) {
      let ele = e.srcElement
      ele.onmousemove = null
    },
    getMusicInformation () {
      let audio = this.$refs.audios
      audio.play()
      let duration = audio.duration
      this.durationTimeSecond = duration
      audio.pause()
      let minutes = Math.floor(duration / 60)
      let second = Math.ceil(duration % 60)
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (second < 10) {
        second = '0' + second
      }
      this.durationTime = minutes + ':' + second
      if (this.firstLoad) {
        this.firstLoad = false
      } else {
        this.playMusic()
      }
    },
    playMusic () {
      let ele = this.$refs.audios
      let that = this
      let interval
      if (ele !== null) {
        if (ele.paused) {
          ele.play()
          this.playing = true
        } else {
          ele.pause()
          this.playing = false
        }
        clearInterval(interval)
        interval = setInterval(() => {
          that.schedule = Math.round(ele.currentTime / this.durationTimeSecond * 1000) / 10
          let min = Math.floor(ele.currentTime / 60)
          let sec = Math.ceil(ele.currentTime % 60)
          if (min < 10) {
            min = '0' + min
          }
          if (sec < 10) {
            sec = '0' + sec
          }
          that.currentTimes = min + ':' + sec
        }, 30)
      }
    },
    nextSong () {
      this.playingSong++
      if (this.playingSong === this.playList.length) {
        this.playingSong = 0
      }
      this.getMusic(this.playList[this.playingSong].id)
    },
    prevSong () {
      this.playingSong--
      if (this.playingSong < 0) {
        this.playingSong = this.playList.length - 1
      }
      this.getMusic(this.playList[this.playingSong].id)
    }
  }
}
</script>
<style scoped>
.player-box{
  position: relative;
}
.player{
  height: 50px;
  align-items: center;
  border-top: 1px solid #d7d7d7;
}
.player >>> .el-progress__text{
  display: none;
}
.player >>> .el-progress-bar{
  padding: 0;
  margin-right: 0;
}
.player .allTime{
  text-align: center;
}
.player .processBar{
  position: relative;
}
.player .point{
  content: '';
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.player .point::after{
  content: '';
  width: 6px;
  height: 6px;
  background-color: #c62f2f;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.player .cover{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.player .btn{
  color: #444;
  text-decoration: none;
}
.play-btn-box{
  align-items: center;
}
.play-btn-box .btn{
  background-color: #c62f2f;
  border-radius: 20px;
  padding: 0.45rem;
  color: #fff;
}
.playList{
  padding-right: 1.2rem;
  border-radius: 0 5px 5px 0;
  background-color: #d7d7d7;
}
.playListBox{
  position: absolute;
  right: 0;
  bottom: 50px;
  width: 60%;
  box-shadow: 0 0 20px #666;
  z-index: 999;
}
.content-top >>> .el-table .el-table__body-wrapper::-webkit-scrollbar{
  width: 8px;
}
.content-top >>> .el-table .el-table__body-wrapper::-webkit-scrollbar-track{
  border-radius: 10px;
  background-color: #F5F5F5;
}
.content-top >>> .el-table .el-table__body-wrapper::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: #d7d7d7;
}

.playInformationBox{
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  line-height: 1.4;
}
.playInformationBox .informationBox{
  border-top: 1px solid #d7d7d7;
  padding: 10px;
}
.playInformationBox .el-row{
  align-items: center;
}
.playInformationBox p{
  margin-bottom: 0.4rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.playInformationBox p:last-child{
  color: #999;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.playInformationBox p .iconfont{
  font-size: 12px;
  float: right;
}
</style>
