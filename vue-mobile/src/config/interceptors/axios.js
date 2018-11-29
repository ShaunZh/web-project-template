/**
 * @Author: Hexon
 * @Date: 2018/10/18 下午6:33
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/10/18 下午6:33
 */

import {CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE} from '../index.js';
import sessionSaver from 'Utils/sessionSaver';

export function requestSuccessFunc(requestObj) {
  CONSOLE_REQUEST_ENABLE && console.info('requestInterceptorFunc', `url: ${requestObj.url}`, requestObj);
  const auth = sessionSaver.get(gGlobal.const['STORAGE/SESSION'].auth);
  // 如果token存在，且请求头上没有token，则添加token
  if (auth === null || auth.length === 0) {
    delete requestObj.headers.Authorization;
  } else if (requestObj.headers.Authorization === undefined) {
    requestObj.headers.Authorization = auth;
  }
  // 自定义请求拦截逻辑，可以处理权限，请求发送监控等
  return requestObj;
}

export function requestFailFunc(requestError) {
  // 自定义发送请求失败逻辑，断网，请求发送监控等
  // todo 需要返回相应的错误信息
  gGlobal.vbus.$emit('business.ajax.request.error', '请求失败');
  return Promise.reject(requestError);
}

export function responseSuccessFunc(responseObj) {
  CONSOLE_RESPONSE_ENABLE && console.info('responseSuccessFunc', responseObj);
  const resData = responseObj.data;
  const {code, message} = resData;
  if (code !== 200) {
    // 响应不正确
    gGlobal.vbus.$emit('business.response.incorrect', message);
  }
  return resData;
}

export function responseFailFunc(responseError) {
  // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
  // todo 需要返回相应的错误信息
  if (responseError.code === 'ECONNABORTED') {
    gGlobal.vbus.$emit('business.ajax.response.error', '请求超时');
    return;
  }
  gGlobal.vbus.$emit('business.ajax.response.error', '响应失败');
  return Promise.reject(responseError);
}
