/**
 * @Author: Hexon
 * @Date: 2018/11/7 上午11:08
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/7 上午11:08
 * @description:
 */

import _ from 'lodash';
/**
 * @description  命名空间
 * @param {string} namespace
 */

const namespace = 'win-';

const _valid = (() => {
  /**
   * @description 判断key是否缺失
   * @param
   * @return
   */
  const _isLoseKey = (key, name) => {
    if (typeof key === 'undefined' || key === null) {
      throw new Error(`SessionStorage Error: ${name}() 缺失 key`);
    }
  };

  const _set = key => {
    _isLoseKey(key, '_set');
  };

  const _get = key => {
    _isLoseKey(key, '_get');
  };

  const _remove = key => {
    try {
      _isLoseKey(key, '_remove');
      if (
        (typeof key === 'string' && key.length === 0) ||
        (Object.prototype.toString.call(key) === '[object Array]' && key.length === 0)
      ) {
        throw new Error(`SessionStorage Error: _remove() key为空`);
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  return {
    _set,
    _get,
    _remove
  };
})();

/**
 * @description 获取值
 * @param {string} key
 * @return {all}: value 值
 */
const _get = key => {
  try {
    _valid._get(key);
    const data = JSON.parse(sessionStorage.getItem(namespace + key));
    return data && data.data;
  } catch (e) {
    console.error(e.message);
  }
};

/**
 * @description 设置值
 * @param {string} key
 * @param {all} value
 * @return
 */
const _set = (key, value) => {
  try {
    _valid._set(key);
    const data = {
      data: value
    };
    sessionStorage.setItem(namespace + key, JSON.stringify(data));
  } catch (e) {
    console.error(e.message);
  }
};

const _remove = key => {
  try {
    _valid._remove(key);
    if (_.isArray(key)) {
      key.map(item => {
        sessionStorage.removeItem(namespace + item);
      });
    } else if (typeof key === 'string') {
      sessionStorage.removeItem(namespace + key);
    }
  } catch (e) {
    console.error(e.message);
  }
};

const _clear = () => {
  sessionStorage.clear();
};

export default {
  get: _get,
  set: _set,
  remove: _remove,
  clear: _clear
};
