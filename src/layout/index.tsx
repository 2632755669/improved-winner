import React, { useContext } from 'react';
import { Icon, Tooltip } from '@ss/mtd-react';
import { Header } from './components/Header';
import { logout } from '../utils/login';
import { useSerivcer } from '../hooks/useServicer';
import { UserInfoContext } from '../context/UserInfoContext';
import './index.less';

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => {
  const { children } = props;
  const onFeedback = useSerivcer({ misId: '6962724' });
  const { avatar } = useContext(UserInfoContext);
  // 退出登录
  const handleLogout = () => {
    console.log('退出登录');
    logout();
  };
  // 联系客服
  const service = () => {
    console.log('跳转到大象');
    onFeedback();
  };

  return (
    <div>
      <Header
        title="CAP服务"
        logout={handleLogout}
        avatarUrl={avatar}
        toolBar={
          <div className="header-toolbar">
            <Tooltip message="咨询反馈" className="header-tooltip">
              <div className="header-toobar-bg">
                <Icon
                  onClick={service}
                  className="header-toolbar-connect"
                  type="customer-o"
                />
              </div>
            </Tooltip>
          </div>
        }
      />
      <div id="layout-content" className="layout-content">
        <div className="layout-content-inner">{children}</div>
      </div>
    </div>
  );
};
