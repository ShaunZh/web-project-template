/**
 * @Author: Hexon
 * @Date: 2018/10/18 下午6:35
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/10/18 下午6:35
 */
import axios from 'axios'
import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from './interceptor'
import { AXIOS_DEFAULT_CONFIG } from './config'

let axiosInstance = {}
axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)

// 注入请求拦截
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)

// 注入响应拦截
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default axiosInstance
