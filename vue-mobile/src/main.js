import Vue from 'vue';

// import 'Components'// 全局组件注册
// import 'Directives' // 指令

// 引入插件
import router from 'Plugins/router';
import inject from 'Plugins/inject';
import store from 'Plugins/store';
// 引入根组件
import App from './App';

gGlobal.vbus = new Vue();

Vue.use(inject);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
