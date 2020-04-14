/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-14 17:46:00
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-14 17:47:19
 */
export const setInfoToSession = (info) => {
  sessionStorage.setItem('listOperateInfo', JSON.stringify(info))
}

export const getInfoFromSession = () => {
  return JSON.parse(sessionStorage.getItem('listOperateInfo'))
}

export const removeInfoFromSession = () => {
  sessionStorage.removeItem('listOperateInfo')
}
