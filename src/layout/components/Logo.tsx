import './logo.less';

// 美团logo
const logoImagePath =
  'https://s3plus.sankuai.com/v1/mss_792eb492f090427ab38638303ff58ca0/fawususong-prod/da507ed9-6c8f-476a-8fcc-ba5b6775cc3c.png';

interface Props {
  url?: string;
  title: string;
}

export const Logo = (props: Props) => {
  const { url, title } = props;
  return (
    <div className="logo-container">
      <img src={logoImagePath || url} className="logo" alt="美团logo" />
      <span>美团</span>
      <span>{title}</span>
    </div>
  );
};
