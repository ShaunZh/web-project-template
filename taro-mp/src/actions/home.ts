/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-23 15:16:22
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-24 15:09:13
 */
import {
  HOME_INFO,
  HOME_FETCH_REQUEST,
  HOME_FETCH_SUCCESS,
  HOME_FETCH_FAILURE
} from '@/constants/home'
import { API_HOME, API_HOME_SEARCH } from '@/constants/api'
import { createAction } from '@/utils/redux'
import request from '@/utils/request'

/**
 * 首页数据
 * @param {*} payload
 */
export const fetchHome = (payload) => (dispatch) => {
  dispatch({ type: HOME_FETCH_REQUEST, payload })
  request
    .post(API_HOME, payload)
    .then((res) => {
      const list = res.data.result
      dispatch({
        type: HOME_FETCH_SUCCESS,
        payload: {
          list
        }
      })
    })
    .catch(() => {
      dispatch({
        type: HOME_FETCH_FAILURE
      })
    })
}
/**
 * 首页搜索
 * @param {*} payload
 */
export const dispatchSearch = (payload) =>
  createAction({
    url: API_HOME_SEARCH,
    type: HOME_INFO,
    payload
  })
