<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 18:00:02
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-09 18:25:38
 -->
<template>
  <van-swipe :autoplay="2000" indicator-color="#fff" :width="imageWidth" :height="imageHeight">
    <van-swipe-item v-for="(image, index) in imagesList" :key="index" @click="$emit('click', index)">
      <img v-lazy="image" class="swipe-image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe as VanSwipe, SwipeItem as VanSwipeItem } from 'vant'
export default {
  name: 'ComSwipe',
  components: {
    VanSwipe,
    VanSwipeItem
  },
  props: {
    imageHeight: Number,
    imageWidth: Number,
    imagesList: {
      type: Array,
      default: [],
      required: true
    }
  },
  computed: {
    swipeImages() {
      return this.imagesList
    }
  }
}
</script>

<style lang="scss" scoped>
/* 激活的指示器样式 */
/deep/ .van-swipe__indicator--active {
  width: 12px !important;
  border-radius: 3px;
  margin-right: 6px;
}
.swipe-image {
  border-radius: 6px;
}
</style>
