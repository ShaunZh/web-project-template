/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-26 09:54:48
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-27 17:47:16
 */
import Taro from '@tarojs/taro'
import {
  USER_INFO,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SHOW_AUTH_DIALOG
} from '@/constants/user'
import { API_USER_LOGIN } from '@/constants/api'

import request from '@/utils/request'
import { logError } from '../utils/error'

export const dispatchUserInfo = (payload) => {
  return {
    type: USER_INFO,
    payload
  }
}
/**
 * @description:  调用微信登录获取code，并调用后端登录接口，将code和其他参数（如：用户名）传入后端，获取token
 * @param {object}params: 此处默认传入微信返回的用户信息https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html
 * @return:
 */
export const dispatchWxLogin = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: LOGIN_REQUEST
    })
    Taro.login({
      success: function (wxRes) {
        if (wxRes.code) {
          // 调用后端登录哦接口
          request
            .post(API_USER_LOGIN, {
              code: wxRes.code,
              ...payload
            })
            .then((loginRes) => {
              const { token = '' } = loginRes
              dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                  userInfo: payload,
                  token
                }
              })
              resolve()
            })
            .catch((err) => {
              logError('api', API_USER_LOGIN, err)
              dispatch({
                type: LOGIN_FAILURE
              })
              reject()
            })
        } else {
          logError('微信', 'wx.login', wxRes.errMsg)
          reject(wxRes.errMsg)
        }
      },
      fail: function (errMsg) {
        logError('微信', 'wx.login fail', errMsg)
        reject()
      }
    })
  })
}

/**
 * @description: 小程序授权登录：1. 获取授权信息，2. 获取用户信息，3. 微信登录获取code，4. 调用后端登录接口传入code，获取token，5. 登录结束
 * @param {type}
 * @return:
 */
export const dispatchLogin = () => (dispatch) => {
  // 1. 获取授权信息
  return new Promise((resolve, reject) => {
    Taro.getSetting({
      success: function (settingRes) {
        if (settingRes.authSetting['scope.userInfo']) {
          // 2. 获取用户信息
          Taro.getUserInfo({
            success: function (userInfo) {
              // 3. 微信登录获取code 并 调用后端登录接口
              dispatchWxLogin(userInfo)(dispatch)
                .then(() => {
                  resolve()
                })
                .catch(() => {
                  reject()
                })
            },
            fail: function (errMsg) {
              dispatch({
                type: LOGIN_FAILURE
              })
              logError('微信', 'wx.getUserInfo fail', errMsg)
              reject()
            }
          })
        } else {
          // 用户未授权，展示授权对话框
          dispatch({
            type: SHOW_AUTH_DIALOG
          })
          reject()
        }
      },
      fail: function (errMsg) {
        dispatch({
          type: LOGIN_FAILURE
        })
        logError('微信', 'wx.getSetting fail', errMsg)
        reject()
      }
    })
  })
}
