/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-10 14:46:45
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-14 18:45:07
 */

import axios from '@/plugins/axios'

// ---- 列表 ----
const list = (param) => {
  return axios.post('/list', param)
}

const create = (params) => {
  return axios.post('/list/create', params)
}

const edit = (params) => {
  return axios.post('/list/edit', params)
}

const detail = (params) => {
  return axios.post('/list/detail', params)
}

export default {
  list,
  create,
  edit,
  detail
}
