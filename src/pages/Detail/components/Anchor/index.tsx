import { Anchor as MtdAnchor } from '@ss/mtd-react';
import './index.less';

const { Link } = MtdAnchor;

export const Anchor = () => {
  const getTarget = (): HTMLElement => {
    return document.querySelector('#detail-left') || document.body;
  };

  return (
    <div className="anchor-container">
      <MtdAnchor
        className="anchor-list text-white-84 text-base"
        affix
        offsetTop={50}
        scrollOffset={30}
        getContainer={getTarget}
      >
        <Link href="#demo-fixed-anchor-1" title="业务介绍" />
        <Link href="#demo-fixed-anchor-2" title="本书使用场景" />
        <Link href="#demo-fixed-anchor-3" title="如何获取本书" />
        <Link href="#demo-fixed-anchor-4" title="服务团队" />
        <Link href="#demo-fixed-anchor-5" title="常见问题" />
        <Link href="#demo-fixed-anchor-6" title="评价" />
      </MtdAnchor>
    </div>
  );
};
