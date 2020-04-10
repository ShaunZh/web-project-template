import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import plugins from './plugins/inject'
import './plugins/vant'
// 全局css
import './assets/styles/index.scss'
import './icons' // icon

Vue.config.productionTip = false
Vue.use(plugins)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
