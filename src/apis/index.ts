import { get, post, registerInterceptor } from '@cap/mtv-fetch';
import { message } from '@ss/mtd-react';

const ENV = ['staging, production'].includes(process.env.REACT_APP_ENV || '')
  ? 'production'
  : 'test';

console.log(process.env.REACT_APP_ENV, ENV, 'env');

// const loginKeyMap = {
//   production: '028999243f_ssoid',
//   test: '1a5c3e71bd_ssoid',
// };

export interface HttpResponse<T = any> {
  data: T;
  status: {
    code: number;
    message: string;
    subCode: string;
    subMessage: string;
  };
  success: boolean;
}

function messageShow(description: string) {
  message.error({
    message: description,
  });
}

// 通用错误提示
const ErrMsg = '网络错误';

registerInterceptor('request', (config) => {
  config.headers['X-Tenant'] = 'soa';
  config.headers.LoginType = 'sso';
  config.headers.LoginKey = '028999243f_ssoid';
  return config;
});
registerInterceptor('response', (status, response) => {
  if (status === 200) {
    const { code, success, status: statusCode } = response;
    if (
      success === true ||
      code === 0 ||
      statusCode === 0 ||
      statusCode?.code === 0
    ) {
      return Promise.resolve(response);
    }
    messageShow(
      response?.status?.message || response?.data?.message || '服务异常',
    );
    return Promise.reject(response);
  }

  // TODO 交互待优化
  // return Promise.reject(response.data);
  // 服务器状态码不是200的情况
  switch (status) {
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
      messageShow(response.message || ErrMsg);
  }
  return Promise.reject(response);
});

export { get, post };
