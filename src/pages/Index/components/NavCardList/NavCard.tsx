import testUrl from '../../../../assets/icon/logo_img.jpg';

const imgUrl =
  'https://p0.meituan.net/smarttestvenus/5451f997aa9c1dee543572b083a8bcbe624884.png';
interface Props {
  className?: string;
}

export const NavCard = (props: Props) => {
  const { className } = props;
  return (
    <section className={`w-400px mb-12 cursor-pointer ${className}`}>
      <div className="w-full h-225px rounded-xl overflow-hidden">
        <img src={imgUrl} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex items-center mt-3 ">
        <img
          src={testUrl}
          alt=""
          className="object-cover mr-3 w-70px h-70px rounded-lg"
        />
        <div className="text-white-72 h-70px">
          <h3 className="text-lg">政府媒体数据报送</h3>
          <p className="text-sm leading-5 my-1">闪电报告、定制报告服务</p>
          <div className="text-xs">
            <span className="bg-dark-300 p-1 rounded-md mr-1">自动获取</span>
            <span className="bg-dark-300 p-1 rounded-md mr-1">支持定制</span>
            <span className="bg-dark-300 p-1 rounded-md mr-1">多主题</span>
          </div>
        </div>
      </div>
    </section>
  );
};
