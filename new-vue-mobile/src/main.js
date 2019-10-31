import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from './plugins/inject'

import 'normalize.css/normalize.css'

// 全局css
import './assets/styles/index.scss'

// 注入插件
Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
