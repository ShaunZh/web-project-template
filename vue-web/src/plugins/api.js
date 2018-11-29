/**
 * @Author: Hexon
 * @Date: 2018/10/18 下午6:36
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/10/18 下午6:36
 */
import axios from './axios';
import _pick from 'lodash/pick';
import _isEmpty from 'lodash/isEmpty';
import _assign from 'lodash/assign';

import {assert} from 'Utils/tools';
import {API_DEFAULT_CONFIG} from 'Config/index'; // api默认配置
import API_CONFIG from 'Service/api'; // api接口

class MakeApi {
  constructor(options) {
    this.api = {};
    this.apiBuilder(options);
  }

  apiBuilder({sep = '|', config = {}, mock = false, debug = false, mockBaseURL = ''}) {
    Object.keys(config).map(namespace => {
      this._apiSingleBuilder({
        namespace,
        mock,
        mockBaseURL,
        sep,
        debug,
        config: config[namespace]
      });
    });
  }

  _apiSingleBuilder({namespace, sep = '|', config = {}, mock = false, debug = false, mockBaseURL = ''}) {
    config.forEach(api => {
      const {name, desc, params, method, mockEnable, path, mockPath} = api;
      const isMock = process.env.NODE_ENV === 'production' ? false : mock || mockEnable;
      const url = isMock ? mockPath : path;
      const baseURL = isMock && mockBaseURL;

      debug && assert(name, `${url}: 接口的name属性不能为空`);
      debug && assert(url.indexOf('/') === 0, `${url}: 接口路径的path，首字符应为/`);

      Object.defineProperty(this.api, `${namespace}${sep}${name}`, {
        value(outerParams, outerOptions) {
          const _data = _isEmpty(outerParams) ? params : _pick(_assign({}, params, outerParams), Object.keys(params));
          const _options = isMock
            ? {
                url,
                desc,
                baseURL,
                method
              }
            : {
                url,
                desc,
                method
              };
          return axios(_normalize(_assign(_options, outerOptions), _data));
        }
      });
    });
  }
}

function _normalize(options, data) {
  if (options.method === 'POST') {
    options.data = data;
  } else if (options.method === 'GET') {
    options.params = data;
  }
  return options;
}

export default new MakeApi({
  config: API_CONFIG,
  ...API_DEFAULT_CONFIG
})['api'];
