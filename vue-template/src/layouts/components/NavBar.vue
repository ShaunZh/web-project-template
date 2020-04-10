<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 16:51:50
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-10 17:40:31
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
  methods: {
    onChange(e) {
      const routesList = ['/', '/list/index', '/admin/dataAnalysis', '/my/index']

      console.log('e', e)
      this.$router.push(routesList[e]).catch((err) => {
        console.error(err.message)
      })
    }
  }
}
</script>
