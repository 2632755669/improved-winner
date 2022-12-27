import { get, post, HttpResponse } from './index';

/**
 * 获取用户信息
 */
interface UserInfo extends HttpResponse<null> {
  users: Array<{
    name: string;
    userId: string;
    mis: string;
  }>;
}

export const getUserInfo = () => {
  return post<UserInfo>('/sapi/client/v1/tmcadminservice_getssoinfo').then(
    (data) => {
      if (data?.status.code === 0) {
        return data;
      }
      return Promise.reject();
    },
  );
};
/**
 * 获取用户头像
 */

export const getUserAvatar = () => {
  return get<HttpResponse<string>>('/sapi/client/v1/getpic').then((data) => {
    if (data?.status.code === 0) {
      return data;
    }
    return Promise.reject();
  });
};

export const getUserInfoWithAvatar = async () => {
  const userInfo = await getUserInfo();
  const avatar = await getUserAvatar();
  return {
    username: userInfo?.users[0].name,
    mis: userInfo?.users[0].mis,
    avatar: avatar.data,
  };
};

// 公共接口
interface LikeCountParams {
  typeCode: string;
  objectCode: string;
}

interface LikeCount<T> {
  data: T;
  status: number;
}

/**
 * 取消点赞
 */

export const cancelLikeApi = (id: string) => {
  const params = {
    objectCode: id,
    typeCode: 'soa_common',
  };
  return post<LikeCountParams, LikeCount<boolean>>(
    '/comment/user/unlike',
    params,
  ).then(({ data, status }) => {
    if (status === 0) {
      return data;
    }
    return Promise.reject();
  });
};
/**
 * 点赞
 */

export const likeApi = (id: string) => {
  const params = {
    objectCode: id,
    typeCode: 'soa_common',
  };
  return post<LikeCountParams, LikeCount<boolean>>(
    '/comment/user/like',
    params,
  ).then(({ data, status }) => {
    if (status === 0) {
      return data;
    }
    return Promise.reject();
  });
};
/**
 * 获取点赞数
 */

export const getLikeCount = (id: string) => {
  const params = {
    objectCode: id,
    typeCode: 'soa_common',
  };
  return post<LikeCountParams, LikeCount<number>>(
    '/comment/likeObject/count',
    params,
  ).then(({ data, status }) => {
    if (status === 0) {
      return data;
    }
    return 0;
  });
};
