<!--
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-02-08 09:44:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-08 11:37:29
-->
<template>
  <!-- 轮播图 -->
  <div class="swiper">
    <v-carousel height='200px'
                cycle
                hide-delimiter-background
                :show-arrows='false'
                interval='3000'
                delimiter-icon='mdi-heart-circle'>
      <v-carousel-item v-for="(item,i) in items"
                       :key="i"
                       :src="item.src">
      </v-carousel-item>
    </v-carousel>

  </div>
</template>
<script>
export default {
  name: "Carousel", // 轮播图
  data() {
    return {
      // 轮播图数据
      items: [
        {
          src: require('@/assets/images/mmexport1643246395446.jpg'),
        },
        {
          src: require('@/assets/images/mmexport1643246413744.jpg'),
        },
        {
          src: require('@/assets/images/mmexport1643246432895.jpg'),
        },
        {
          src: require('@/assets/images/mmexport1643246449490.jpg'),
        },
        {
          src: require('@/assets/images/mmexport1643246462812.jpg'),
        },
        {
          src: require('@/assets/images/mmexport1643246475838.jpg'),
        },
      ],
    };
  }
}
</script>
<style lang="scss" scoped>
.swiper {
  border-radius: 0.4em;
  overflow: hidden;
}
</style>