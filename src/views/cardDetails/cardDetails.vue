<!--
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-02-07 11:27:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-14 15:39:21
-->
<template>

  <!-- 过渡动画从底部划出 transition="dialog-bottom-transition" -->
  <v-dialog v-model="this.isShow"
            fullscreen
            width="500">
    <v-card>
      <v-toolbar dark
                 color="primary">
        <v-btn icon
               dark
               @click="close">
          <v-icon>mdi-arrow-left-thick</v-icon>
          <v-icon>mdi-chevron-left-circle-outline</v-icon>
        </v-btn>
      </v-toolbar>
      <h3>ID:{{this.detailData.id}}</h3>
      <h3>Title:{{this.detailData.title}}</h3>
      <h3>Text:{{this.detailData.text}}</h3>
      <h3>Tab:{{this.detailData.tab}}</h3>
    </v-card>
  </v-dialog>

</template>
<script>
import {
  mapState,
  // mapMutations, mapActions
} from 'vuex';
export default {
  name: "CardDetails",
  props: [''],
  data() {
    return {
      id: 0,
      data: {}
    };
  },

  computed: {
    ...mapState(['detailData', 'isShow']) // 映射 this.detailData为 store.state.detailData
  },
  methods: {
    close() {
      // this.$store.getters.getState
      this.$store.commit('isShow', false)
    }
  },
  mounted() {

  },
  // beforeCreate:
  //   function detailData() {
  //     this.data = this.$store.state.detailData
  //     // console.log(this.data);
  //     return this.data
  //   }
}
</script>
<style lang="scss" scoped>
</style>