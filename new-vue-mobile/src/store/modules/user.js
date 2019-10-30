// import { login, logout, getInfo } from '@/api/user'
// import gateApi from '@/api/gate'
// import adminApi from '@/api/admin'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import { getToken } from '@/utils/auth'
// import {resetRouter} from '@/router';

// import {Message} from 'element-ui';

const state = {
  token: getToken(),
  id: '',
  introduction: '',
  name: '',
  avatar: '',
  mobile: '',
  account: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_MOBILE: (state, roles) => {
    state.mobile = roles
  },
  SET_ACCOUNT: (state, roles) => {
    state.account = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    // return new Promise((resolve, reject) => {
    //   gateApi
    //     .login(userInfo)
    //     .then((response) => {
    //       const { result } = response
    //       sessionStorage.setItem('bdyzsyjx_user', JSON.stringify(result.userInfo))
    //       sessionStorage.setItem('bdyzsyjx_authidlist', JSON.stringify(result.userInfo.functionNumberList))
    //       setToken(result.Authorization)
    //       commit('SET_TOKEN', result.Authorization)
    //       resolve(userInfo)
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     })
    // })
  },

  // get user info
  getInfo({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   const userInfo = JSON.parse(sessionStorage.getItem('bdyzsyjx_user'))
    //   if (!userInfo || userInfo === null) {
    //     reject(new Error('获取用户信息失败，请重新登录'))
    //   }
    //   const { userName, userMobile, userImg01, userAccount, id } = userInfo
    //   commit('SET_ID', id)
    //   commit('SET_TOKEN', getToken)
    //   commit('SET_NAME', userName)
    //   commit('SET_AVATAR', userImg01)
    //   commit('SET_ACCOUNT', userAccount)
    //   commit('SET_MOBILE', userMobile)
    // })
  },

  // user logout
  logout({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   gateApi
    //     .logout()
    //     .then(() => {
    //       commit('SET_ID', '')
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       commit('SET_ROLE_NUMBER', '')
    //       commit('SET_NAME', '')
    //       commit('SET_AVATAR', '')
    //       commit('SET_ACCOUNT', '')
    //       commit('SET_MOBILE', '')
    //       commit('SET_NOTEBOOK_INFO', {})
    //       removeToken()
    //       sessionStorage.removeItem('bdyzsyjx_user')
    //       sessionStorage.removeItem('bdyzsyjx_authidlist')
    //       sessionStorage.removeItem('bdyzsyjx_notebookinfo')
    //       resolve()
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     })
    // })
  },

  // remove token
  resetToken({ commit }) {
    // return new Promise((resolve) => {
    //   commit('SET_TOKEN', '')
    //   commit('SET_ROLES', [])
    //   commit('SET_ROLE_NUMBER', '')
    //   commit('SET_NAME', '')
    //   commit('SET_AVATAR', '')
    //   commit('SET_ACCOUNT', '')
    //   commit('SET_MOBILE', '')
    //   removeToken()
    //   sessionStorage.removeItem('bdyzsyjx_user')
    //   sessionStorage.removeItem('bdyzsyjx_authidlist')
    //   sessionStorage.removeItem('bdyzsyjx_notebookinfo')
    //   resolve()
    // })
  }

  // // dynamically modify permissions
  // changeRoles({ commit, dispatch }, role) {
  //   return new Promise(async resolve => {
  //     const token = role + '-token'

  //     commit('SET_TOKEN', token)
  //     setToken(token)

  //     const { roles } = await dispatch('getInfo')

  //     resetRouter()

  //     // generate accessible routes map based on roles
  //     const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

  //     // dynamically add accessible routes
  //     router.addRoutes(accessRoutes)

  //     // reset visited views and cached views
  //     dispatch('tagsView/delAllViews', null, { root: true })

  //     resolve()
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
