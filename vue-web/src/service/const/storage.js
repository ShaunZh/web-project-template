/**
 * @Author: Hexon
 * @Date: 2018/11/7 上午11:43
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/7 上午11:43
 * @description: 定义存储在sessionstorage和localstorage中的字段名
 */
export default [
  {
    name: 'SESSION',
    value: {
      auth: 'Authorization' // 权限
    }
  },
  {
    name: 'LOCAL',
    value: {
      accessModule: 'accessModule', // 模块权限字段名
      accessMenu: 'accessMenu', // 菜单权限字段名
      accessBtn: 'accessBtn', // 按钮权限字段名
      userInfo: 'userInfo', // 用户信息
      homeRouteAddr: 'homeRouteAddr' // 首页的路由地址
    }
  }
];
