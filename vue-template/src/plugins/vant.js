import Vue from 'vue'
import { Toast, Lazyload } from 'vant'
import VueTimeago from 'vue-timeago'

// 将所有 Toast 的展示时长设置为 2000 毫秒
Toast.setDefaultOptions({
  duration: 2000,
  position: 'middle'
})

Vue.use(Toast)
Vue.use(Lazyload)

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'zh-CN', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn')
  }
})
