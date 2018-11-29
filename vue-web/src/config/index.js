/**
 * @Author: Hexon
 * @Date: 2018/10/18 下午6:33
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/10/18 下午6:33
 */

export const NODE_ENV = process.env.NODE_ENV || 'prod';

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 10000,
  'Content-Type': 'application/json',
  baseURL: 'http://stretch.punan.xyz/mgr' // 测试
};

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: process.env.NODE_ENV !== 'production' // 生产环境下关闭严格模式
};

// API 默认配置
export const API_DEFAULT_CONFIG = {
  mockBaseURL: 'https://www.easy-mock.com/mock/5bd158617f2aec4f84b04de8', // baseURL

  mock: false,
  debug: true,
  sep: '/'
};

// const 默认配置
export const CONST_DEFAULT_CONFIG = {
  sep: '/'
};

// vue-router路由默认配置，路由表不从此注入
export const ROUTER_DEFAULT_CONFIG = {
  waitForData: true,
  transitionOnLoad: true
};

export const CONSOLE_REQUEST_ENABLE = true; // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = true; // 开启响应参数打印
