/* eslint-disable react/no-array-index-key */
import { ImgCover } from '../../../../components/ImgCover';

export interface NavData {
  id: number;
  moduleId: string;
  title: string;
  desc: string;
  coverImg: string;
  titleImg: string;
  isVideo: boolean;
  tags: string[];
}
interface Props {
  className?: string;
  data: NavData;
}

export const NavCard = (props: Props) => {
  const { className, data } = props;
  return (
    <section
      className={`flex justify-center rounded-xl py-3 w-424px h-353px bg-dark-200.0 hover:bg-dark-200.1 ${className}`}
    >
      <section className="w-400px cursor-pointer">
        <div className="w-full h-225px rounded-lg overflow-hidden img-border">
          <ImgCover src={data.coverImg} isVideo={data.isVideo} />
        </div>
        <div className="flex mt-3 ">
          <img
            src={data.titleImg}
            alt=""
            className="object-cover mr-3 w-72px h-72px rounded-lg img-border"
          />
          <div className="text-white-72">
            <h3 className="text-lg font-bold">{data.title}</h3>
            <p className="text-base leading-5 my-1 ellipsis">{data.desc}</p>
            <div className="flex">
              {data?.tags?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="bg-dark-300 leading-5 text-sm px-1 rounded mr-1 hidden md:block first:block"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
