import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: resolve => require(['@/page/discoverMusic.vue'], resolve)
    },
    {
      path: '/musicList',
      name: 'musicList',
      component: resolve => require(['@/page/musicList.vue'], resolve)
    },
    {
      path: '/radio',
      name: 'radio',
      component: resolve => require(['@/page/radio.vue'], resolve)
    },
    {
      path: '/Leaderboard',
      name: 'Leaderboard',
      component: resolve => require(['@/page/Leaderboard.vue'], resolve)
    },
    {
      path: '/singer',
      name: 'singer',
      component: resolve => require(['@/page/singer.vue'], resolve)
    }
  ]
})
