const getters = {
  name: (state) => state.user.name,
  curNavTab: (state) => state.ui.curNavTab,
  keepAliveRoute: (state) => state.ui.keepAliveRoute,
  keepAliveKey: (state) => state.ui.keepAliveKey
}
export default getters
