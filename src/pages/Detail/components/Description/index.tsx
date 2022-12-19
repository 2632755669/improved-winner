import { Icon } from '@ss/mtd-react';
import { DescSwiper } from '../DescSwiper';
import './index.less';

export const Description = () => {
  return (
    <section className="description-container flex w-full text-base">
      <div className="flex-1 mr-14">
        <h1 className="text-white-84 text-3xl">介绍行业发展情况</h1>
        <p className="mt-1 text-white-60 leading-snug">
          制定营销计划需提前掌握一些特殊日期、节点，一方面更好地抓住热点，一方面也要避免可能出现的风险；进行一些涉及到内容的业务活动时，例如广告软文、海报头图等，也需要熟知在某些特殊日期有哪些注意事项，避免踩雷。风控日历会根据外部安全形势，定期汇集重要的时间节点，并提示相应的风险和雷点，帮助大家有节奏、有重点地规划工作，避免发生风险事件。
        </p>
        <div className="mt-3">
          <span className="bg-dark-300 p-1 rounded-md mr-2 mb-2 text-white-60">
            高危风险专题课
          </span>
        </div>
        <div className="description-action flex items-center mt-4">
          <span className="text-white-100 px-4 py-1 bg-blue-300 rounded-md cursor-pointer">
            <Icon type="add" />
            <span className="ml-1">订阅</span>
          </span>
          <span className=" bg-dark-300 px-4 py-1 text-white-60 rounded-md ml-4">
            <Icon type="fabulous" />
            <span className="ml-1">23</span>
          </span>
          <span className="description-line" />
          <span className="text-white-60 ml-6">
            <Icon type="comment" />
            <span className="ml-1">3</span>
          </span>
        </div>
      </div>
      <div className="description-swiper w-432px h-243px rounded-xl overflow-hidden bg-white-84">
        <DescSwiper />
      </div>
    </section>
  );
};
