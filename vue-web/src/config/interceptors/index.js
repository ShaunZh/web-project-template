/**
 * @Author: Hexon
 * @Date: 2018/10/18 下午6:33
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/10/18 下午6:33
 */
import {requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc} from './axios';
import {routerBeforeEachFunc, routerAfterEachFunc} from './router';

export default {
  requestSuccessFunc,
  requestFailFunc,
  responseSuccessFunc,
  responseFailFunc,
  routerBeforeEachFunc,
  routerAfterEachFunc
};
