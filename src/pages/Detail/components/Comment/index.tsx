import { CommentItem, CommentItemType } from './CommentItem';
import { CommentInput } from './CommentInput';
import './index.less';

interface Props {
  commentData: CommentItemType[];
}

export const Comment = (props: Props) => {
  const { commentData } = props;
  return (
    <section id="detail-comment" className="pb-24">
      <h3 className="text-white-84 text-2xl font-bold">
        评价({commentData?.length})
      </h3>
      <section className="mt-4">
        {commentData?.map((item) => {
          return <CommentItem key={item.commentId} data={item} />;
        })}
      </section>
      <CommentInput />
    </section>
  );
};
