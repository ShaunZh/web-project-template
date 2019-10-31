/**
 * @Author: Hexon
 * @Date: 2018/10/18 下午6:36
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/10/18 下午6:36
 */
import axios from './axios'

export default {
  install: (Vue, options) => {
    Vue.prototype.$ajax = axios
  }
}
