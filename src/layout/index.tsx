import React from 'react';
import { Icon } from '@ss/mtd-react';
import { Header } from './components/Header';
import './index.less';

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
  // 退出登录
  const logout = () => {
    console.log('退出登录');
  };
  // 联系客服
  const service = () => {
    console.log('跳转到大象');
  };

  const { children } = props;
  return (
    <div>
      <Header
        title="CAP服务"
        logout={logout}
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
