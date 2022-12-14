import React, { useMemo } from 'react';
import { Dropdown, Menu } from '@ss/mtd-react';
import './avatar.less';

const MenuItem = Menu.Item;

interface Props {
  avatarURL?: string;
  logout(): void;
}

const defaultAvatarURL =
  'https://s3plus-img.meituan.net/v1/mss_792eb492f090427ab38638303ff58ca0/fawususong-prod/68711725-a588-47f6-ac92-70b85f3110f0.jpg@120w';

export const Avatar = (props: Props) => {
  const { avatarURL, logout } = props;
  const menu = useMemo(
    () => (
      <Menu inlineIndent={18}>
        <MenuItem>
          <button className="avatar-logout-btn" onClick={logout}>
            退出
          </button>
        </MenuItem>
      </Menu>
    ),
    [logout],
  );
  return (
    <div className="avatar">
      <div className="avatar-img">
        <Dropdown content={menu}>
          <img src={avatarURL || defaultAvatarURL} alt="avatar" />
        </Dropdown>
      </div>
    </div>
  );
};
