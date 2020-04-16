<!--
 * @Description: 功能：列表滚动加载、图片懒加载、 
 * @Author: Hexon
 * @Date: 2020-04-10 13:49:50
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-16 15:40:43
 -->
<template>
  <div class="page-list">
    <van-pull-refresh v-model="loading" @refresh="reloadData">
      <van-search
        v-model="filterOptions.keywords"
        placeholder="搜索"
        show-action
        shape="round"
        @focus="$router.push('/search')"
      >
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
        <div v-for="(item, index) in list" :key="index" class="item">
          <ListItem :itemData="item" @edit="onEdit(index)" @detail="onDetail(index)"></ListItem>
        </div>
      </van-list>
      <ScrollTop ref="scrollTop"></ScrollTop>
    </van-pull-refresh>
  </div>
</template>

<script>
import { search as VanSearch, List as VanList, PullRefresh as VanPullRefresh } from 'vant'
import mixinBackLastPos from '@/mixins/backLastPos'
import ScrollTop from '@/components/ScrollTop'
import listApi from './service'
import ListItem from './components/ListItem'
import { setInfoToSession, getInfoFromSession, removeInfoFromSession } from './utils'
export default {
  name: 'List',
  components: { ListItem, VanList, VanSearch, ScrollTop, VanPullRefresh },
  mixins: [mixinBackLastPos],

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
    console.log('created')
  },
  mounted() {
    document.addEventListener('scroll', this.$refs['scrollTop'].onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.$refs['scrollTop'].onScroll)
  },

  activated() {
    // 用于处理从编辑页面和新建页面返回到当前页面，当在编辑页面和新增页面操作成功时，需要写入success到session中
    this.dealBack()
  },

  methods: {
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
    // 从编辑页面、新建页面和详情页面返回到当前页面时的处理函数
    async dealBack() {
      const info = getInfoFromSession()
      if (info) {
        const { success, index, type } = info
        // 编辑页面返回时，如果编辑成功，则需要更新指定项的数据
        if (success && type === 'edit') {
          await this.updateItem(index)
          removeInfoFromSession()
        } else if (success && type === 'create') {
          // 新建页面返回时，如果新建成功，则需要重新加载数据
          await this.reloadData()
          removeInfoFromSession()
        }
      }
    },
    // 重新加载数据
    async reloadData() {
      this.filterOptions.curPage = 1
      await this.onLoadList()
    },

    // 更新列表中索引为index项目
    async updateItem(index) {
      await listApi
        .detail({
          number: this.list[index].number
        })
        .then((res) => {
          this.$set(this.list, index, res.result)
        })
    },
    /**
     * @description: 进入编辑页面
     * @param {number}index: 编辑项的索引
     * @return:
     */
    onEdit(index) {
      const info = {
        type: 'edit',
        index
      }
      setInfoToSession(info)
      this.$router.push({ path: '/list/edit', query: { number: this.list[index].number } })
    },
    // 进入新建页面
    onCreate() {
      const info = {
        type: 'create'
      }
      setInfoToSession(info)
      this.$router.push('/list/create').catch((err) => {
        console.error(err.message)
      })
    },
    // 进入详情
    onDetail(index) {
      this.$router.push({ path: '/list/detail', query: { number: this.list[index].number } }).catch((err) => {
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
