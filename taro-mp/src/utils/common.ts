/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-23 11:13:24
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-23 11:14:57
 */

export const formatNumber = (n: number | string): string => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('-') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}
