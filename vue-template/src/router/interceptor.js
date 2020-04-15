/*
 * @Description:
 * @Author: Hexon
 * @Date: 2019-10-30 14:56:21
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-15 17:55:29
 */

import store from '@/store'
import { WxInstance } from '@/utils/wxAuth'

export function routerBeforeEachFunc(to, from, next) {
  const token = WxInstance.getAuthFromSession()
  // 如果token不存在，则获取token信息
  if (!token) {
    store.dispatch('user/login')
  } else {
    // 已经授权，则判断是否有用户信息，如果没有则获取用户信息
  }
  next()
}

export function routerAfterEachFunc(to, from) {
  to.meta.title && (document.title = to.meta.title)

  // ----- keep alive 处理
  const routeInfo = {
    to: {
      keepAlive: to.meta.keepAlive,
      deepth: to.meta.deepth,
      name: to.name
    },
    from: {
      keepAlive: from.meta.keepAlive,
      deepth: from.meta.deepth,
      name: from.name
    }
  }

  store.commit('ui/KEEP_ALIVE_ROUTE', routeInfo)

  // ----  keep alive 处理 - end -----
}
