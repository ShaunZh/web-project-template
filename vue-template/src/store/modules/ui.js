/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-10 17:50:36
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-13 15:40:59
 */
const state = {
  curNavTab: '/',
  keepAliveRoute: [], // 包含keep-alive 的路由
  keepAliveKey: '' // keep-alive 的路由 key值
}

const mutations = {
  UPDATE_CUR_NAV_TAB: (state, curNavTab) => {
    state.curNavTab = curNavTab
  },
  // keep-alive 路由处理
  KEEP_ALIVE_ROUTE: (state, routeInfo) => {
    const { to, from } = routeInfo
    // 如果 要 to(进入) 的页面是需要 keepAlive 缓存的，把 name push 进 include数组
    if (to.keepAlive) {
      !state.keepAliveRoute.includes(to.name) && state.keepAliveRoute.push(to.name)
    }
    // 正常操作情况：如果从keep-alive页面，进入非keep-alive页面，且其deepth小于keep-alive的deepth，
    // 则说明进入的是keep-alive的同级页面，则下次进入keep-alive页面需要重新加载数据
    // 非正常情况：1. 从列表页面进入列表项编辑页面，在返回到该列表页面时，需要加载当期页的数据并更新到列表中
    //           2. 从列表页面进入到新增页面，新增完成后回到列表页面，需要加载第一页的数据
    // 对于非正常情况下，此处无法进行处理， 需要手动在keep-alive页面中进行处理
    if (from.keepAlive && to.deepth < from.deepth) {
      let index = state.keepAliveRoute.indexOf(from.name)
      index !== -1 && state.keepAliveRoute.splice(index, 1)
    }
    // 更新keep-alive 的key值
    state.keepAliveKey = to.name
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
