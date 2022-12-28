import { ImgCover } from '../../../../components/ImgCover';

export interface MoreServiceDataItem {
  id: number;
  title: string;
  desc: string;
  isVideo: boolean;
  coverImg: string;
  titleImg: string;
  tags: string[];
}

interface Props {
  data: MoreServiceDataItem;
}

export const ServiceCard = (props: Props) => {
  const { data } = props;
  return (
    <section className="service-card flex flex-col items-center pt-3 mb-4 w-312px h-256px transition-all duration-700 cursor-pointer bg-dark-200.0 hover:bg-dark-200.1 rounded-xl">
      <div>
        <div className="w-288px h-162px rounded-lg overflow-hidden img-border">
          <ImgCover src={data.coverImg} isVideo={data.isVideo} />
        </div>
        <h3 className="wtext-lg text-white-72 font-bold mt-2 mb-1">
          {data.title}
        </h3>
        <p className="text-sm text-white-42 ellipsis">{data.desc}</p>
      </div>
    </section>
  );
};
