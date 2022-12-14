import React from 'react';
import { Header } from './components/Header';

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
  const logout = () => {
    console.log('退出登录');
  };

  const { children } = props;
  return (
    <div>
      <Header title="CAP服务" logout={logout} />
      <div>{children}</div>
    </div>
  );
};
