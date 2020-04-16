<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 16:51:50
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-16 18:20:57
 -->
<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">
      首页
      <!-- <router-link to="/home">首页</router-link> -->
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o" info="5">
      列表
      <!-- <router-link to="/list">列表</router-link> -->
    </van-tabbar-item>
    <van-tabbar-item icon="search" dot>
      数据可视化
      <!-- <router-link to="/admin/dataAnalysis">数据可视化</router-link> -->
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o" info="20">
      个人中心
      <!-- <router-link to="/my/index">个人中心</router-link> -->
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar as VanTabbar, TabbarItem as VanTabbarItem } from 'vant'

export default {
  name: 'ComNavBar',
  components: { VanTabbar, VanTabbarItem },
  data() {
    return {
      active: 0
    }
  },
  created() {
    this.initActiveNav()
  },

  methods: {
    // 初始化页面时，激活tab
    initActiveNav() {
      const { path } = this.$route
      if (path === '/') {
        this.active = 0
      } else if (path.indexOf('/list') >= 0) {
        this.active = 1
      } else if (path.indexOf('/admin') >= 0) {
        this.active = 2
      } else if (path.indexOf('/my') >= 0) {
        this.active = 3
      }
    },
    onChange(e) {
      const routesList = ['/', '/list/index', '/admin/dataAnalysis', '/my/index']

      this.$router.push(routesList[e]).catch((err) => {
        console.error(err.message)
      })
    }
  }
}
</script>
