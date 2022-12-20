import { Anchor } from './components/Anchor';
import { Breadcrumb } from './components/Breadcrumb';
import { Description } from './components/Description';
import { DetailContent } from './components/DetailContent';
import { MoreService } from './components/MoreService';
import { Comment } from './components/Comment';
import './index.less';

// 详情页
export const Detail = () => {
  return (
    <main>
      <section>
        <Breadcrumb />
      </section>
      <section className="flex flex-wrap w-full mt-6">
        <section id="detail-left" className="detail-left flex-1">
          <Description />
          <DetailContent />
          <Comment />
        </section>
        <section className="detail-right w-320px ml-12">
          <Anchor />
          <MoreService />
        </section>
      </section>
    </main>
  );
};
