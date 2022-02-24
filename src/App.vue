<!--
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-01-05 10:03:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-27 16:09:00
-->
<template>
  <v-app id="inspire">
    <div id="app">
      <Systembar></Systembar>
      <Tabbar></Tabbar>
      <router-view />
    </div>
  </v-app>
</template>
<script>
import Systembar from '@/components/systembar.vue'
import Tabbar from '@/components/tabbar.vue'
export default {
  name: "App",
  components: {
    Tabbar,
    Systembar
  },
  data () {
    return {
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon {
  width: 2.5em;
  height: 2.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
