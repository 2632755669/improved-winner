import './logo.less';

// 美团logo
import logoImagePath from '../../assets/icon/logo_img.jpg';

interface Props {
  url?: string;
  title: string;
}

export const Logo = (props: Props) => {
  const { url, title } = props;
  return (
    <a href="/soa/v2/home">
      <div className="header-logo-container">
        <img
          src={logoImagePath || url}
          className="header-logo-img"
          alt="美团logo"
        />
        <span className="header-logo-text">美团</span>
        <span className="header-logo-title">{title}</span>
      </div>
    </a>
  );
};
