/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-23 15:22:33
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-24 15:03:52
 */

import { HOME_FETCH_REQUEST, HOME_FETCH_SUCCESS, HOME_FETCH_FAILURE } from '@/constants/home'

const INITIAL_STATE = {
  homeList: {},
  fetching: false,
  filterOptions: {
    curPage: 1,
    pageSize: 10,
    keywords: ''
  }
}

export type HomeStateType = typeof INITIAL_STATE

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOME_FETCH_REQUEST:
      const { filterOptions } = action.payload
      return {
        ...state,
        fetching: true,
        filterOptions: {
          ...state.filterOptions,
          ...filterOptions
        }
      }
    case HOME_FETCH_SUCCESS:
      const { list } = action.payload
      return {
        ...state,
        fetching: false,
        homeList: list
      }
    case HOME_FETCH_FAILURE:
      return {
        ...state,
        fetching: false
      }

    default:
      return state
  }
}
