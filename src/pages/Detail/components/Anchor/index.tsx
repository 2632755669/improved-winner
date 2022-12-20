import { Anchor as MtdAnchor } from '@ss/mtd-react';
import { detailData } from '../../../../mockData';
import './index.less';

const { Link } = MtdAnchor;

export const Anchor = () => {
  const getTarget = () => {
    return document.querySelector('#anchor-containter') as HTMLElement;
  };

  return (
    <div className="anchor-container">
      <h3 className="text-white-84 text-2xl mb-4">目录</h3>
      <MtdAnchor
        className="anchor-list text-white-84 text-base"
        scrollOffset={30}
        getContainer={getTarget}
        affix={false}
      >
        {detailData.map((item) => {
          return <Link href={`#${item.id}`} key={item.id} title={item.title} />;
        })}
      </MtdAnchor>
    </div>
  );
};
