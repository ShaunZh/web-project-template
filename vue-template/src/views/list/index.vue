<!--
 * @Description: 功能：列表滚动加载、图片懒加载、 
 * @Author: Hexon
 * @Date: 2020-04-10 13:49:50
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-10 17:40:39
 -->
<template>
  <div class="page-list">
    <van-search v-model="filterOptions.keywords" placeholder="搜索" show-action shape="round" @search="onSearch">
    </van-search>
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      finished-text="没有更多了"
      error-text="请求失败，点击重新加载"
      class="list"
      :offset="50"
      @load="onLoadList"
    >
      <div v-for="(item, index) in list" :key="index" class="item" @click="onClick(index)">
        <ListItem :itemData="item"></ListItem>
      </div>
    </van-list>
  </div>
</template>

<script>
import { search as VanSearch, List as VanList } from 'vant'
import listApi from './service'
import ListItem from './components/ListItem'
export default {
  name: 'List',
  components: { ListItem, VanList, VanSearch },

  data() {
    return {
      loading: false, // 加载状态
      finished: false, // 加载完成状态
      error: false, // 是否加载失败，

      total: 0,
      list: [],
      // 过滤条件
      filterOptions: {
        keywords: '',
        curPage: 1,
        pageSize: 10
      }
    }
  },
  created() {
    // this.onLoadList()
  },
  methods: {
    // 懒加载视频
    onSearch() {},
    // 滚动加载
    onLoadList() {
      listApi
        .list({
          page: {
            pageNumbers: this.filterOptions.curPage,
            countPerPages: this.filterOptions.pageSize
          },
          data: {
            keyWord: this.filterOptions.keywords
          }
        })
        .then((res) => {
          let list = res.result.data || []
          if (res.result.page.pageNumbers === 1) {
            this.list = list
          } else {
            this.list = this.list.concat(list)
          }
          // 加载状态结束
          this.loading = false
          // 数据全部加载完成
          if (this.list.length >= res.result.total) {
            this.finished = true
          } else {
            this.filterOptions.curPage++
          }
        })
        .catch(() => {
          this.loading = false
          this.error = true
        })
    },
    onClick(index) {
      this.$router.push('/list/detail').catch((err) => {
        console.error(err.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 0 12px 20px;
}
</style>
