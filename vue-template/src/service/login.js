/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-08 15:23:16
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-08 15:29:46
 */
import axios from '@/plugins/axios'

// ---- 微信相关  ----
const wxGetAuth = (param) => {
  return axios.post('/auth/authCodeOfPat', param)
}

// 微信签名
const wxGetJsapiSignature = (param) => {
  return axios.post('/weixin/getJsapiSignature', param)
}

// ---- end 微信相关 ----
export default {
  wxGetAuth,
  wxGetJsapiSignature
}
