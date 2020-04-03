/*
 * @Description:
 * @Author: Hexon
 * @Date: 2019-10-30 14:59:31
 * @LastEditors: Hexon
 * @LastEditTime: 2019-11-20 11:12:10
 */
import store from '@/store'
import { getToken } from '@/utils/auth'
export const requestSuccessFunc = (config) => {
  // do something before request is sent
  if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers['Authorization'] = getToken()
  }
  return config
  // (error) => {
  //   // do something with request error
  //   console.log(error) // for debug
  //   return Promise.reject(error)
  // }
}

export function requestFailFunc(error) {
  console.log(error) // for debug
  return Promise.reject(error)
}

export function responseSuccessFunc(response) {
  const res = response.data

  // if the custom code is not 20000, it is judged as an error.
  if (res.code !== 200) {
    // 验证错误， 弹出错误信息，只有该错误码才弹出错误信息
    if (res.code === 406) {
      // Message.closeAll()
      // Message({
      //   message: res.msg || 'Error',
      //   type: 'error',
      //   duration: 2 * 1000
      // })
    } else if (res.code === 600) {
      // 未登录或登录失效或无权操作-->重定向到登录页
      // to re-login
      // MessageBox.confirm('未登录或登录失效，请重新登录', {
      //   confirmButtonText: '重新登录',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   store.dispatch('user/resetToken').then(() => {
      //     location.reload()
      //   })
      // })
    } else if (res.code === 500) {
      // 出现该错误，则在控制台打印错误信息
      console.error('系统发生异常，请联系管理员')
    }
    if (res.msg) {
      // 将后台接口的msg字段转为message字段传给前端，兼容 new Error('message string') 的写法
      res.message = res.msg
    }
    return Promise.reject(res)
  } else {
    return res
  }
}

export function responseFailFunc(error) {
  console.log('responseFail: ' + error.message) // for debug

  if (error.code === 'ECONNABORTED') {
    // Toast.fail('请求超时')
  } else {
    // Toast.fail(error.message)
  }
  return Promise.reject(error)
}
