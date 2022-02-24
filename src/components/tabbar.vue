<!--
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-01-05 15:29:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 10:59:52
-->

<template>
  <div class="tabbar">
    <v-bottom-navigation v-model="value"
                         background-color="blue"
                         dark
                         shift
                         grow
                         app>
      <v-btn to="/">
        <span>首页</span>

        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>

        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn to="/user">
        <span>我的</span>

        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({ value: 0 }),

  computed: {
    // color() {
    //   switch (this.value) {
    //     case 0: return 'blue'
    //     case 1: return 'teal'
    //     case 2: return 'red'
    //     default: return 'green'
    //   }
    // },
  },
}
</script>
