import axios from '@/plugins/axios'

// ---- 微信相关  ----
const getAuth = (param) => {
  return axios.post('/auth/authQyWx', param)
}

// 微信签名
const wxGetJsapiSignature = (param) => {
  return axios.post('/auth/getJsapiSignature', param)
}

// ---- end 微信相关 ----
export default {
  getAuth,
  wxGetJsapiSignature
}
