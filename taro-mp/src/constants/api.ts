/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-23 11:06:33
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-23 14:41:58
 */

/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
// @ts-ignore
export const host = HOST
// @ts-ignore
export const hostM = HOST_M
/* eslint-enable */

// http 请求超时
export const TIMEOUT = 30000

export const CDN = 'https://yanxuan.nosdn.127.net'

// home
export const API_HOME = `${host}/xhr/index/index.json`
export const API_HOME_SEARCH_COUNT = `${host}/xhr/search/displayBar.json`
export const API_HOME_PIN = `${hostM}/pin/min/item/recommend.json`
export const API_HOME_RECOMMEND = `${host}/xhr/rcmd/index.json`

// user
export const API_USER_LOGIN = `${host}/user/login`
