import { Anchor as MtdAnchor } from 'xxxxx';
import { AnchorDataItem } from '../../hooks/useDetailData';
import './index.less';

const { Link } = MtdAnchor;

interface Props {
  data: AnchorDataItem[];
}

export const Anchor = (props: Props) => {
  const { data } = props;
  const getTarget = () => {
    return document.querySelector('#detail-left') as HTMLElement;
  };

  return (
    <div className="anchor-container">
      <h3 className="text-white-84 text-2xl font-bold mb-4">目录</h3>
      <MtdAnchor
        className="anchor-list text-white-84 text-base"
        scrollOffset={150}
        getContainer={getTarget}
        affix={false}
      >
        {data.map((item) => {
          return <Link href={`#${item.id}`} key={item.id} title={item.title} />;
        })}
        <Link href="#detail-comment" title="评价" />
      </MtdAnchor>
    </div>
  );
};
