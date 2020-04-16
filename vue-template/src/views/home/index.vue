<template>
  <div class="home">
    <div class="swipe-wrap">
      <Swipe :imagesList="swipeImages" @click="handleSwipeClick"></Swipe>
      <van-panel title="表单" desc="包括图片上传">
        <router-link to="/form">表单</router-link>
      </van-panel>
    </div>
  </div>
</template>

<script>
import Swipe from '@/components/Swipe'
import { Panel as VanPanel } from 'vant'
export default {
  name: 'Home',
  components: {
    Swipe,
    VanPanel
  },
  data() {
    return {
      swipeImages: ['https://img.yzcdn.cn/1.jpg', 'https://img.yzcdn.cn/2.jpg']
    }
  },
  methods: {
    handleSwipeClick(e) {
      console.log('e', e)
    }
  }
}
</script>

<style lang="scss">
.home {
  padding: 15px;
}
</style>
