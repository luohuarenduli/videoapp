/*
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-01-05 10:03:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-20 13:31:33
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import '@mdi/font/css/materialdesignicons.css'
// import Video from 'video.js'
// import 'video.js/dist/video-js.css'

// import VideoPlayer from 'vue-video-player'
// import 'videojs-contrib-hls' // 单是 RTMP 的话不需要第三方库，如果是 HLS 的话需要引入videojs-contrib-hls，看具体情况而
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')

Vue.config.productionTip = false

// Vue.use(VideoPlayer)
//    .use(Video)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')