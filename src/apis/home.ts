import { get, post } from './index';

export const getTest = (params) => {
  return get('www.123.com', params);
};
export const postTest = (params) => {
  return post('www.123.com', params);
};
