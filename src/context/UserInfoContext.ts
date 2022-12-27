import { createContext } from 'react';

export interface UserInfoType {
  username: string;
  avatar: string;
  mis: string;
}

export const UserInfoContext = createContext<UserInfoType>({
  username: '',
  avatar: '',
  mis: '',
});
