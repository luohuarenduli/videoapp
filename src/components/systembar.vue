<!--
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-01-05 17:16:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-08 09:26:41
-->
<template>
  <div class="systembar">
    <v-system-bar dark
                  color="blue"
                  app>
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-arrow-up-down</v-icon>
      <v-icon>mdi-signal-cellular-2</v-icon>
      <v-icon>mdi-battery-charging-70</v-icon>
      <span>{{ nowDate }}</span>
    </v-system-bar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nowDate: "", // 当前日期
    };
  },
  mounted () {
    this.currentTime();
  },
  methods: {
    currentTime () {
      setInterval(this.formatDate, 500);
    },
    formatDate () {
      const date = new Date();
      // const year = date.getFullYear(); // 年
      // const month = date.getMonth() + 1; // 月
      // const day = date.getDate(); // 日
      // const week = date.getDay(); // 星期
      // const weekArr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      // let second = date.getSeconds(); // 秒
      // second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      // this.nowDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
      this.nowDate = `${hour}:${minute}`;
    },
  }
}
</script>
<style lang="scss" scoped>
</style>