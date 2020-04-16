/*
 * @Description:
 * @Author: Hexon
 * @Date: 2019-10-30 14:56:21
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-16 17:08:23
 */

import store from '@/store'
import { authHttp, WxInstance } from '@/utils/wxAuth'

export function routerBeforeEachFunc(to, from, next) {
  authHttp()
    .then((res) => {
      // 已授权
      if (res.status === 'authed') {
        // 判断是否已经获取了用户信息，如果没有获取，则在此处获取
      } else if (res.status === 'failed') {
        // 表示授权失败
        // eslint-disable-next-line no-invalid-this
        this.$toast.fail(res.message)
      }
      next()
    })
    .catch(() => {
      // 如果是生产环境，则需要重定向到微信授权页面，进入到此处，说明url上没有code，session中也没有token
      if (process.env.NODE_ENV === 'production') {
        WxInstance.wxAuthRedirect()
      } else {
        // 开发环境，可以在此处写入token信息到session中
        next()
      }
    })
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
