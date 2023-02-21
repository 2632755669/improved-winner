import { useMemo } from 'react';
import { Dropdown, Menu } from 'xxxxx';
import defaultAvatar from '../../assets/images/defaultAvatar.png';
import './avatar.less';

const MenuItem = Menu.Item;

interface Props {
  avatarURL?: string;
  logout(): void;
}

export const Avatar = (props: Props) => {
  const { avatarURL, logout } = props;
  const menu = useMemo(
    () => (
      <Menu inlineIndent={8}>
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
        <Dropdown content={menu} placement="bottom">
          <img src={avatarURL || defaultAvatar} alt="avatar" />
        </Dropdown>
      </div>
    </div>
  );
};
