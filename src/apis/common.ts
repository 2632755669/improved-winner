import { post, HttpResponse } from './index';

/**
 * 获取用户信息
 */
interface UserInfo extends HttpResponse<null> {
  name: string;
  userId: string;
  mis: string;
}

export const getUserInfo = () => {
  return post<UserInfo>('/sapi/client/v1/tmcadminservice_getssoinfo').then(
    (data) => {
      console.log(data);
      return data;
    },
  );
};
