<!--
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-02-08 09:51:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-08 11:30:12
-->
<template>
  <!-- 分类 -->
  <div class="classify">
    <v-container>
      <v-row>
        <v-col cols='3'>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-java"></use>
          </svg>
          <br>
          <span>JAVA</span>
        </v-col>
        <v-col cols='3'>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-CAD"></use>
          </svg>
          <br>
          <span>CAD</span>
        </v-col>
        <v-col cols='3'>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-Front-enddevelopmen"></use>
          </svg>
          <br>
          <span>JS</span>
        </v-col>
        <v-col cols='3'>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-shouji-android-"></use>
          </svg>
          <br>
          <span>Android</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols='3'>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-_ruanjianceshi"></use>
          </svg>
          <br>
          <span>软件测试</span>
        </v-col>
        <v-col cols='3'>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-Python"></use>
          </svg>
          <br>
          <span>Python</span>
        </v-col>
        <v-col cols='3'>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon--zongheyunyingjiankong"></use>
          </svg>
          <br>
          <span>运营</span>
        </v-col>
        <v-col cols='3'>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-quanbufenlei"></use>
          </svg>
          <br>
          <span>全部分类</span>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>
<script>
export default {
  name: "Classify", // 分类
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
.classify {
  margin: 0.5em 0 0.33em 0;
  padding: 0;
  span {
    font-size: 0.8em;
  }
}
</style>