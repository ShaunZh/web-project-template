<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 15:29:40
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-10 16:51:31
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
    return {
      keepAliveRoute: [],
      key: ''
    }
  },

  watch: {
    $route(to, from) {
      // 如果 要 to(进入) 的页面是需要 keepAlive 缓存的，把 name push 进 include数组
      if (to.meta.keepAlive) {
        !this.keepAliveRoute.includes(to.name) && this.keepAliveRoute.push(to.name)
      }
      // 如果 要 form(离开) 的页面是 keepAlive缓存的，
      // 再根据 deepth 来判断是前进还是后退
      // 如果是后退
      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        let index = this.keepAliveRoute.indexOf(from.name)
        index !== -1 && this.keepAliveRoute.splice(index, 1)
      }
      this.key = to.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 给底部菜单留出位置，否则底部菜单会覆盖在内容上面 */
  padding-bottom: 40px;
}
</style>
