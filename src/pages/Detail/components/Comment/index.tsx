import { CommentItem } from './CommentItem';
import { CommentInput } from './CommentInput';
import './index.less';

export const Comment = () => {
  return (
    <section className="pb-24">
      <h3 className="text-white-84 text-2xl">评价（3）</h3>
      <section className="mt-4">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </section>
      <CommentInput />
    </section>
  );
};
