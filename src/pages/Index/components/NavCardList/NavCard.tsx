/* eslint-disable react/no-array-index-key */
import { ImgCover } from '../../../../components/ImgCover';

interface NavData {
  coverUrl: string;
  titleImg: string;
  title: string;
  desc: string;
  tags: string[];
}
interface Props {
  className?: string;
  data: NavData;
}

export const NavCard = (props: Props) => {
  const { className, data } = props;
  return (
    <section className="flex items-center justify-center rounded-xl p-4 bg-dark-200.0 hover:bg-dark-200.1">
      <section className={`w-400px mb-12 cursor-pointer ${className}`}>
        <div className="w-full h-225px rounded-xl overflow-hidden">
          <ImgCover src={data.coverUrl} isVideo />
        </div>
        <div className="flex items-center mt-3 ">
          <img
            src={data.titleImg}
            alt=""
            className="object-cover mr-3 w-70px h-70px rounded-lg"
          />
          <div className="text-white-72 h-70px">
            <h3 className="text-lg">{data.title}</h3>
            <p className="text-sm leading-5 my-1">{data.desc}</p>
            <div className="text-xs">
              {data?.tags?.map((item, index) => {
                return (
                  <span key={index} className="bg-dark-300 p-1 rounded-md mr-1">
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
