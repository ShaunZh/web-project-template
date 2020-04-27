/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-26 16:08:43
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-27 10:15:58
 */
import {
  USER_INFO,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SHOW_AUTH_DIALOG
} from '@/constants/user'

const INITIAL_STATE = {
  userInfo: {},
  loginStatus: '',
  token: '',
  showAuthDialog: false
}

export type UserStateType = typeof INITIAL_STATE

export default function user(state = INITIAL_STATE, action) {
  console.log('state: ', state, action)
  const { type, payload } = action
  switch (type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...payload
        }
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: LOGIN_REQUEST
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: payload.userInfo,
        loginStatus: LOGIN_SUCCESS,
        token: payload.token
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: LOGIN_FAILURE
      }
    case SHOW_AUTH_DIALOG:
      console.log('show auth dialog')
      return {
        ...state,
        showAuthDialog: true
      }
    default:
      return state
  }
}
