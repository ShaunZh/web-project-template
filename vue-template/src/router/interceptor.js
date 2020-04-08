/*
 * @Description:
 * @Author: Hexon
 * @Date: 2019-10-30 14:56:21
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-08 17:29:16
 */

import WxAuth from 'wxtoken'
import locationSearch from '@/utils/locationSearch'
import loginApi from '@/service/login'

const WxInstance = WxAuth.getInstance()

const authHttp = () => {
  const searchParams = locationSearch(window.location.search)
  return WxInstance.wxAuth(loginApi.wxGetJsapiSignature, loginApi.wxGetAuth, {
    auth: {
      code: searchParams.code,
      type: 'parent',
      clientKey: searchParams.clientKey || ''
    },
    signature: {
      clientKey: searchParams.clientKey || '',
      url: window.location.href.split('#')[0]
    }
  })
}

export function routerBeforeEachFunc(to, from, next) {
  const token = WxInstance.getAuthFromSession()
  // 如果token不存在，则获取token信息
  if (!token) {
    authHttp().then(() => {
      console.log('授权成功')
      // 获取用户信息
    })
  } else {
    // 已经授权，则判断是否有用户信息，如果没有则获取用户信息
  }
  next()
}

export function routerAfterEachFunc(to) {
  // console.log('to', to)
  to.meta.title && (document.title = to.meta.title)
  // 全局注入分享参数
  // if (to.path !== '/pm/detail' && to.path !== '/practice/detail') {
  //   // 部分详情页会自定义分享链接
  //   resetShareParams(to.fullPath)
  // }
  // 页面跳转触发事件给app.vue，用于计算导航信息
  // gGlobal.vbus.$emit('router.update', to.path)
}
