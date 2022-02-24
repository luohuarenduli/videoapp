<!--
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-01-05 10:03:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-09 15:00:10
-->
<template>
  <v-main>
    <!-- 搜索框 -->
    <div class='search'>
      <v-text-field clearable
                    solo
                    rounded
                    v-model="search"
                    placeholder="搜索您感兴趣的吧!"
                    label="Search"
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    append-icon="mdi-microphone">
      </v-text-field>
    </div>

    <!-- 分类 -->
    <classify></classify>

    <!-- 轮播图 -->
    <slide-show></slide-show>

    <!-- 选项卡 -->
    <tabs></tabs>

    <router-view />

  </v-main>
</template>

<script>
import classify from '@/views/Home/components/classify'
import SlideShow from './components/SlideShow.vue';
import tabs from '@/views/Home/components/tabs'

export default {
  name: "Home", // 名称
  components: {
    classify,
    SlideShow,
    tabs
  },
  data() {
    return {
      search: '',

    };
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
.search {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.swiper {
  border-radius: 0.4em;
  overflow: hidden;
}
.tabs {
  margin-top: 0.3em;
}
.cardTitle {
  width: 7em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.classify {
  margin: 0.5em 0 0.33em 0;
  padding: 0;
  span {
    font-size: 0.8em;
  }
}
</style>