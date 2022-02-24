<!--
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-02-08 11:38:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-09 14:59:07
-->
<template>
  <div class="tabs">
    <v-lazy v-model="isActive"
            :options="{threshold: .5}"
            min-height="200"
            transition="fade-transition">
      <v-tabs v-model="tabs">
        <v-tab v-for="t in tab"
               :key="t.id">
          <v-icon :color='t.color'>{{t.icon}}</v-icon>
          {{t.name}}
        </v-tab>
        <v-tab-item v-for="n in 2"
                    :key="n">
          <v-container fluid>
            <v-row dense>
              <v-col v-for="card in cards"
                     :key="card.id"
                     :cols="card.flex"
                     :value="card.tab">
                <v-card>
                  <v-img :src="card.src"
                         class="white--text align-end"
                         gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                         height="200px"
                         @click="detail(card)">
                    <v-card-title v-text="card.title"
                                  @click="detail(card)"></v-card-title>
                  </v-img>
                  <v-card-title @click="detail(card)">
                    <span class="cardTitle">{{card.title}}</span>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn color="orange lighten-2"
                           text
                           @click="detail(card)">
                      Explore
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon
                           @click="card.show = !card.show">
                      <v-icon>{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="card.show">
                      <!-- 分割线 -->
                      <v-divider></v-divider>
                      <v-card-text class="cardText">
                        {{card.text}}
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-lazy>

    <card-details :key="isShow"
                  :is-show='isShow' />
  </div>
</template>
<script>
import CardDetails from '@/views/cardDetails/cardDetails.vue';

export default {
  name: "tabs",
  components: {
    CardDetails,

  },
  data() {
    return {
      tabs: null,
      show: false,
      isActive: false,
      isShow: false,

      // 选项卡数据
      tab: [{
        id: 1,
        name: 'recommend', // 推荐
        color: 'red',
        icon: 'mdi-fire',
      }, {
        id: 2,
        name: 'newPush', // 新发布
        color: 'yellow',
        icon: 'mdi-compass-rose',
      }],
      cards: [
        {
          id: 1,
          show: false,
          title: 'java视频详细讲解', // 标题
          header: require('@/assets/images/mmexport1643246130770.jpg'),
          src: require('@/assets/images/mmexport1643246112244.jpg'),
          text: '嘻嘻嘻嘻嘻嘻嘻', // 简介 
          flex: 12
        }, {
          id: 2,
          show: false,
          title: 'Favorite road',
          header: require('@/assets/images/mmexport1643246145741.jpg'),
          src: require('@/assets/images/mmexport1643246368261.jpg'),
          text: '嘿嘿嘿嘿嘿嘿嘿',
          flex: 6
        }, {
          id: 3,
          show: false,
          title: 'Best airlines',
          header: require('@/assets/images/mmexport1642467974288.jpg'),
          src: require('@/assets/images/mmexport1643246039239.jpg'),
          text: '叮叮当叮叮当叮',
          flex: 6
        }, {
          id: 4,
          show: false,
          title: 'python解说',
          header: require('@/assets/images/mmexport1642467974288.jpg'),
          src: require('@/assets/images/mmexport1643246075333.jpg'),
          text: '啊哈哈哈哈哈哈',
          flex: 6
        }, {
          id: 5,
          show: false,
          title: 'python解说',
          header: require('@/assets/images/mmexport1642467974288.jpg'),
          src: require('@/assets/images/mmexport1643246075333.jpg'),
          text: '啊哈哈哈哈哈哈',
          flex: 6
        },
      ],
    };
  },
  methods: {
    detail(data) {
      // console.log(data);
      this.$store.commit('detailData', data)
      this.isShow = true
      this.$store.commit('isShow', this.isShow)
    }
  },
}
</script>
<style lang="scss" scoped>
</style>