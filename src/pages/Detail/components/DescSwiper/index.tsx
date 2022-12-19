import { Icon } from '@ss/mtd-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ImgCover } from '../../../../components/ImgCover';
import 'swiper/swiper-bundle.css';
import './index.less';

const data = [
  {
    imgUrl:
      'https://p0.meituan.net/smarttestvenus/5451f997aa9c1dee543572b083a8bcbe624884.png',
    navUrl: '',
  },
  {
    imgUrl:
      'https://s3plus.sankuai.com/v1/mss_f5ecef526b384cbaa1117230d53b4bd6/smart/%E5%90%89%E7%A5%A5%E7%89%A9_g4wdwt.jpg',
    navUrl: '',
  },
];

// 轮播图
export const DescSwiper = () => {
  return (
    <section className="desc-swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          prevEl: '#swiper-pre',
          nextEl: '#swiper-next',
        }}
        loop
        pagination={{
          clickable: true,
          type: 'custom',
          el: '.desc-swiper-pagination',
          renderCustom(swiper, current, total) {
            console.log(swiper);
            let customPaginationHtml = '';
            for (let i = 0; i < total; i++) {
              // 判断哪个分页器此刻应该被激活
              if (i === current - 1) {
                customPaginationHtml +=
                  '<span class="desc-swiper-pagination-item desc-swiper-pagination-item-active"></span>';
              } else {
                customPaginationHtml +=
                  '<span class="desc-swiper-pagination-item"></span>';
              }
            }
            return customPaginationHtml;
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination, Navigation]}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <ImgCover src={item.imgUrl} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="desc-swiper-button" id="swiper-pre">
        <Icon type="left-thick" />
      </div>
      <div className="desc-swiper-button" id="swiper-next">
        <Icon type="right-thick" />
      </div>
      <div className="desc-swiper-pagination" />
    </section>
  );
};
