import { Icon } from '@ss/mtd-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ImgCover } from '../../../../components/ImgCover';
import { DescSwiperDataItem } from '../../hooks/useDetailData';
import 'swiper/swiper-bundle.css';
import './index.less';

interface Props {
  descSwiperData: DescSwiperDataItem[];
}

// 轮播图
export const DescSwiper = (props: Props) => {
  const { descSwiperData } = props;

  if (!descSwiperData?.length) return null;
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
        modules={[Pagination, Navigation]}
      >
        {descSwiperData.map((item) => {
          const imgUrl = item.isVideo ? item.videoCoverUrl : item.imgUrl;
          return (
            <SwiperSlide>
              <ImgCover
                isVideo={false}
                videoId={item.videoId as string}
                src={imgUrl as string}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="desc-swiper-button" id="swiper-pre">
        <Icon type="left" />
      </div>
      <div className="desc-swiper-button" id="swiper-next">
        <Icon type="right" />
      </div>
      <div className="desc-swiper-pagination" />
    </section>
  );
};
