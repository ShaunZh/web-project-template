/**
 * @Author: Hexon
 * @Date: 2018/10/22 下午2:18
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/10/22 下午2:18
 */
import Vue from 'vue';
import Vuex from 'vuex';
import {VUEX_DEFAULT_CONFIG} from 'Config/index';
import commonStore from 'Service/store/common'; // 公共store
Vue.use(Vuex);

export default new Vuex.Store({
  ...VUEX_DEFAULT_CONFIG, // 默认配置
  ...commonStore // 公共state
});
