import { Anchor } from './components/Anchor';
import { Breadcrumb } from './components/Breadcrumb';
import { Description } from './components/Description';
import { DetailContent } from './components/DetailContent';
import { MoreService } from './components/MoreService';
import { Comment } from './components/Comment';

// 详情页
export const Detail = () => {
  return (
    <main>
      <section>
        <Breadcrumb />
      </section>
      <section className="flex w-full">
        <section className="flex-1">
          <Description />
          <DetailContent />
          <Comment />
        </section>
        <section className="w-320px">
          <Anchor />
          <MoreService />
        </section>
      </section>
    </main>
  );
};
