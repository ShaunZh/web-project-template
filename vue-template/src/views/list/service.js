/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-10 14:46:45
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-10 16:14:16
 */

import axios from '@/plugins/axios'

// ---- 列表 ----
const list = (param) => {
  return axios.post('/list', param)
}

export default {
  list
}
