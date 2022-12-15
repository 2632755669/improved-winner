import React from 'react';
import { Logo } from './Logo';
import { Avatar } from './Avatar';
import './header.less';

const prefixCls = 'cap-header';

interface Props {
  title: string;
  avatarUrl?: string;
  logout(): void;
  children?: React.ReactNode;
  toolBar?: React.ReactNode;
}

export const Header = (props: Props) => {
  const { title, avatarUrl, logout, children, toolBar } = props;
  return (
    <div className={`${prefixCls} justify-between bg-red-500`}>
      <Logo title={title} />
      <div className={`${prefixCls}-child`}>{children}</div>
      <div className={`${prefixCls}-right`}>
        <div className={`${prefixCls}-toolbar`}> {toolBar}</div>
        <Avatar avatarURL={avatarUrl} logout={logout} />
      </div>
    </div>
  );
};
