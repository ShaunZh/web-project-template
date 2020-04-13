<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 15:29:40
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-13 15:24:35
 -->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="keepAliveRoute">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {}
  },
  computed: {
    keepAliveRoute() {
      return this.$store.getters.keepAliveRoute
    },
    key() {
      return this.$store.getters.keepALiveKey
    }
  },

  methods: {
    initActiveNavTab(routePath) {}
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 给底部菜单留出位置，否则底部菜单会覆盖在内容上面 */
  padding-bottom: 40px;
}
</style>
