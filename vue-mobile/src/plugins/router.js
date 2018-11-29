/**
 * @Author: Hexon
 * @Date: 2018/10/18 下午6:35
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/10/18 下午6:35
 */
import Vue from 'vue';
import Router from 'vue-router';
import ROUTES from 'Routes';
import {ROUTER_DEFAULT_CONFIG} from 'Config/index';
import {routerBeforeEachFunc, routerAfterEachFunc} from 'Config/interceptors/router';

Vue.use(Router);

// 写入路由配置和路由表
let routerInstance = new Router({...ROUTER_DEFAULT_CONFIG, routes: ROUTES});

// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc);
routerInstance.afterEach(routerAfterEachFunc);

export default routerInstance;
