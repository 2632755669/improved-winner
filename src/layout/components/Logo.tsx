import './logo.less';


import logoImagePath from '../../assets/icon/logo_img.jpg';

interface Props {
  url?: string;
  title: string;
}

export const Logo = (props: Props) => {
  const { url, title } = props;
  return (
    <a href="/soa">
      <div className="header-logo-container">
        <img
          src={logoImagePath || url}
          className="header-logo-img"
          alt="XXXlogo"
        />
        <span className="header-logo-text">XXX</span>
        <span className="header-logo-title">{title}</span>
      </div>
    </a>
  );
};
