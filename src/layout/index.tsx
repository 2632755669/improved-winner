import React, { useContext } from 'react';
import { Icon, Tooltip } from 'xxxxx';
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
  const onFeedback = useSerivcer({ misId: '1926' });
  const { avatar } = useContext(UserInfoContext);
  // 退出登录
  const handleLogout = () => {
    logout();
  };
  // 联系客服
  const service = () => {
    onFeedback();
  };

  return (
    <div>
      <Header
        title="XXX服务"
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
