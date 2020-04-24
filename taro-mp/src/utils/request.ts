/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-23 10:20:41
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-24 14:10:32
 */
import Taro from '@tarojs/taro'
import { HTTP_STATUS } from '../constants/status'
import { TIMEOUT, API_USER_LOGIN } from '../constants/api'
import { logError } from '../utils/error'

/* eslint-disable */
// @ts-ignore
export const host = HOST
// @ts-ignore
export const hostM = HOST_M
/* eslint-enable */

export default {
  baseOptions(params) {
    const { url, data, showToast = true, autoLogin = true, method = 'GET' } = params
    const token = Taro.getStorageSync('Authorization')
    let contentType = 'application/json'
    contentType = params.contentType || contentType

    type OptionType = {
      url: string
      data?: object | string
      method?: any
      header: object
      timeout?: number
      // mode: string,
      success: any
      error: any
      xhrFields: object
    }

    const option: OptionType = {
      // 如果url是http格式的，则直接使用传入的url，否则添加host前缀
      url: url.indexOf('http') !== -1 ? url : host + url,
      data: data,
      method: method,
      timeout: TIMEOUT,
      header: {
        'content-type': contentType,
        Authorization: token
      },
      // mode: 'cors',
      xhrFields: { withCredentials: true },
      success(res) {
        // if user login
        if (url === API_USER_LOGIN) {
          Taro.setStorageSync('Authorization', res.data)
        }
        return res.data
      },
      error(err) {
        const defaultMsg = err.code === HTTP_STATUS.AUTHENTICATE ? '登录失效' : '请求异常'
        if (showToast) {
          Taro.showToast({
            title: (err && err.message) || defaultMsg,
            icon: 'none'
          })
        }
        if (err.code === HTTP_STATUS.AUTHENTICATE && autoLogin) {
          Taro.navigateTo({
            url: '/pages/user-login/user-login'
          })
        }
        logError('api', '请求接口出现问题', err)
        return Promise.reject({ message: defaultMsg, ...err })
      }
    }
    // eslint-disable-next-line
    return Taro.request(option)
  },
  request(option) {
    return this.baseOptions(option)
  },
  get(url, data?: object) {
    const option = { url, data, method: 'GET' }
    return this.baseOptions(option)
  },
  post: function (url, data?: object, contentType?: string) {
    const params = { url, data, contentType, method: 'POST' }
    return this.baseOptions(params)
  },
  put(url, data?: object) {
    const option = { url, data, method: 'PUT' }
    return this.baseOptions(option)
  },
  delete(url, data?: object) {
    const option = { url, data, method: 'DELETE' }
    return this.baseOptions(option)
  }
}
