/*
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-01-05 10:03:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-08 17:16:02
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detailData: {},
    isShow: false
  },
  mutations: {
    detailData(state, info) {
      state.detailData = info
    },
    isShow(state, info) {
      state.isShow = info
    }
  },
  actions: {
  },
  modules: {
  }
})
