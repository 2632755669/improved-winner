import { Icon } from '@ss/mtd-react';
import './index.less';

export const DetailContent = () => {
  return (
    <section className="detail-content-container mt-14">
      <section className="detail-content-text">详情内容</section>
      <section className="detail-content-like w-full flex-col-center my-14">
        <div className="text-white-42 flex-col-center text-sm">
          <span className="text-center leading-10 border-solid-round w-40px h-40px text-24">
            <Icon type="fabulous" />
          </span>
          <span className="my-2">信息有用，点赞</span>
          <span>23人觉得很赞</span>
        </div>
      </section>
    </section>
  );
};
