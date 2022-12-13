/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import { notification } from 'antd';
import axios from 'axios';

function messageShow(description: string) {
  notification.error({
    description
  });
}

// 环境的切换
axios.defaults.baseURL = '';

// 请求超时时间
axios.defaults.timeout = 10000;

// 通用错误提示
const ErrMsg = '网络错误';

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers['Cache-Control'] = 'no-cache';

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.code !== 0) {
        messageShow(response.data.message);
        return Promise.reject(response.data);
      }

      return Promise.resolve(response.data);
    }

    // TODO 交互待优化
    return Promise.reject(response.data);
  },
  // 服务器状态码不是200的情况
  (error) => {
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        messageShow('未登录');
        break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
      case 403:
        messageShow('登录过期，请重新登录');
        break;
        // 404请求不存在
      case 404:
        messageShow('网络发生异常(404)');
        break;
        // 其他错误，直接抛出错误提示
      default:
        messageShow(
          error.responese.data.message || ErrMsg,
        );
    }
    return Promise.reject(error.response);
  },
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get<Response = any>(url: string, params?: Record<string, any>) {
  return axios.get<any, Response>(url, {
    params: (params || {}),
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post<Response = any>(url: string, params: Record<string, any>) {
  return axios.post<any, Response>(url, params);
}
