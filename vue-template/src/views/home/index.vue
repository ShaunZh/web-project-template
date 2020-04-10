<template>
  <div class="home">
    <div class="swipe-wrap">
      <Swipe :imagesList="swipeImages" @click="handleSwipeClick"></Swipe>
    </div>
  </div>
</template>

<script>
import Swipe from '@/components/Swipe'
export default {
  name: 'Home',
  components: {
    Swipe
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
