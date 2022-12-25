import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ImgCover } from '../../../../components/ImgCover';
import { DescSwiperDataItem } from '../../hooks/useDetailData';
import rightSvg from '../../../../assets/icon/right-thick.svg';
import leftSvg from '../../../../assets/icon/left-thick.svg';
import 'swiper/swiper-bundle.css';
import './index.less';

interface Props {
  descSwiperData: DescSwiperDataItem[];
}

// 轮播图
export const DescSwiper = (props: Props) => {
  const { descSwiperData } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePauseVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
  };

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
        onSwiper={handlePauseVideo}
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
                isVideo={item.isVideo}
                canPlay
                videoId={item.videoId as string}
                src={imgUrl as string}
                ref={videoRef}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="desc-swiper-button" id="swiper-pre">
        <img className="w-24px h-24px" src={leftSvg} alt="" />
      </div>
      <div className="desc-swiper-button" id="swiper-next">
        <img className="w-24px h-24px" src={rightSvg} alt="" />
      </div>
      <div className="desc-swiper-pagination" />
    </section>
  );
};
