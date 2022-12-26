import React from 'react';
import { Icon } from '@ss/mtd-react';
import { Header } from './components/Header';
import { logout } from '../utils/login';
import './index.less';

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
  const { children } = props;
  // 退出登录
  const handleLogout = () => {
    console.log('退出登录');
    logout();
  };
  // 联系客服
  const service = () => {
    console.log('跳转到大象');
  };

  return (
    <div>
      <Header
        title="CAP服务"
        logout={handleLogout}
        toolBar={
          <div className="header-toolbar">
            <div className="header-toobar-bg">
              <Icon
                onClick={service}
                className="header-toolbar-connect"
                type="customer-o"
              />
            </div>
          </div>
        }
      />
      <div id="layout-content" className="layout-content">
        <div className="layout-content-inner">{children}</div>
      </div>
    </div>
  );
};
