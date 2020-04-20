<!--
 * @Description: 功能：列表滚动加载、图片懒加载、 
 * @Author: Hexon
 * @Date: 2020-04-10 13:49:50
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-20 14:03:57
 -->
<template>
  <div class="page-list">
    <van-pull-refresh v-model="loading" @refresh="reloadData">
      <van-search
        v-model="filterOptions.keywords"
        placeholder="搜索"
        show-action
        shape="round"
        @focus="$router.push('/list/search')"
      >
      </van-search>
      <!-- 通过sticky属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶 -->
      <van-tabs v-model="activeTab" :sticky="true">
        <van-tab title="标签 1">
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
              <ListItem :itemData="item" :loading="loading" @edit="onEdit(index)" @detail="onDetail(index)"></ListItem>
            </div>
          </van-list>
        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
      </van-tabs>

      <back-to-top
        :custom-style="myBackToTopStyle"
        :visibility-height="300"
        :back-position="50"
        transition-name="fade"
      />
    </van-pull-refresh>
  </div>
</template>

<script>
import {
  search as VanSearch,
  List as VanList,
  PullRefresh as VanPullRefresh,
  Tabs as VanTabs,
  Tab as VanTab
} from 'vant'
import mixinBackLastPos from '@/mixins/backLastPos'
import BackToTop from '@/components/BackToTop'
import listApi from './service'
import ListItem from './components/ListItem'
import { setInfoToSession, getInfoFromSession, removeInfoFromSession } from './utils'
export default {
  name: 'List',
  components: { ListItem, VanList, VanSearch, BackToTop, VanPullRefresh, VanTabs, VanTab },
  mixins: [mixinBackLastPos],

  data() {
    return {
      loading: false, // 加载状态
      finished: false, // 加载完成状态
      error: false, // 是否加载失败，
      activeTab: 0, // 当前激活的tab

      total: 0,
      list: [],
      // 过滤条件
      filterOptions: {
        keywords: '',
        curPage: 1,
        pageSize: 10
      },
      myBackToTopStyle: {
        right: '20px',
        bottom: '70px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1' // 按钮的背景颜色 The background color of the button
      }
    }
  },
  created() {
    this.onLoadList()
    console.log('created')
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
