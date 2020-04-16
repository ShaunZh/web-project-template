/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-08 18:01:03
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-16 17:16:10
 */

import WxAuth from 'wxtoken'
import locationSearch from '@/utils/locationSearch'
import loginApi from '@/service/login'

export const WxInstance = WxAuth.getInstance()

export const authHttp = () => {
  const searchParams = locationSearch(window.location.search)
  return WxInstance.wxAuth(loginApi.wxGetJsapiSignature, loginApi.wxGetAuth, {
    // auth：为调用微信授权接口的请求参数
    auth: {
      code: searchParams.code || undefined,
      type: 'parent',
      clientKey: searchParams.clientKey || ''
    },
    // signature: 为调用微信签名接口的请求参数
    signature: {
      clientKey: searchParams.clientKey || '',
      url: window.location.href.split('#')[0]
    }
  })
}
