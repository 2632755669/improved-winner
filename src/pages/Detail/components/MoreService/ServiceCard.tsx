import { ImgCover } from '../../../../components/ImgCover';

const imgUrl =
  'https://p0.meituan.net/smarttestvenus/5451f997aa9c1dee543572b083a8bcbe624884.png';

export const ServiceCard = () => {
  return (
    <section className="service-card flex flex-col items-center pt-3 mb-4 w-312px h-256px transition-all duration-700 cursor-pointer bg-dark-200.0 hover:bg-dark-200.1 rounded-xl">
      <div>
        <div className="w-288px h-162px rounded-xl overflow-hidden">
          <ImgCover src={imgUrl} isVideo={false} />
        </div>
        <h3 className="wtext-lg text-white-72 mt-2 mb-1">政府协会大屏合作</h3>
        <p className="text-sm text-white-42">数据大屏开发服务</p>
      </div>
    </section>
  );
};
