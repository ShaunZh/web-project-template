<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 14:44:24
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-16 15:48:26
 -->
<template>
  <div class="page-search">
    <van-search v-model="keywords" placeholder="请输入搜索关键词" show-action autofocus @search="onSearch">
      <template v-slot:action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
import { Search as VanSearch } from 'vant'
export default {
  name: 'Search',
  components: {
    VanSearch
  },
  data() {
    return {
      keywords: ''
    }
  },
  methods: {
    onSearch() {
      console.log('search')
    }
  }
}
</script>
