/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-23 11:12:43
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-23 11:13:58
 */
import { formatTime } from './common'
/**
 *
 * @param {string} name 错误名字
 * @param {string} action 错误动作描述
 * @param {string} info 错误信息，通常是 fail 返回的
 */
// eslint-disable-next-line
export const logError = (name: string, action: string, info?: string | object) => {
  if (!info) {
    info = 'empty'
  }
  const time = formatTime(new Date())
  console.error(time, name, action, info)
  if (typeof info === 'object') {
    info = JSON.stringify(info)
  }
}
