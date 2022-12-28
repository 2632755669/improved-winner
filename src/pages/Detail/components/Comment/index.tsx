import { Modal, message } from '@ss/mtd-react';
import { useContext } from 'react';
import classnames from 'classnames';
import { CommentItem } from './CommentItem';
import { CommentInput } from './CommentInput';
import { CommentContext } from '../../context/CommentContext';
import './index.less';

export const Comment = () => {
  const { comments, deleteComment } = useContext(CommentContext);
  const handleDeleteComment = (commentId: string) => {
    Modal.confirm({
      title: '提示',
      message: '确认删除该条评论吗?',
      async onOk() {
        await deleteComment(commentId);
        message.success({ message: '删除成功' });
      },
    });
  };
  return (
    <section id="detail-comment" className="pb-24">
      <h3 className="text-white-84 text-2xl font-bold">
        评价({comments.me?.length + comments.excellent?.length})
      </h3>
      <section className="mt-4">
        {comments?.me?.map((item, index) => {
          const border0 = comments?.me?.length === index + 1;
          return (
            <CommentItem
              onDelete={() => handleDeleteComment(item.commentId)}
              key={item.commentId}
              data={item}
              className={classnames({ 'border-0': border0 })}
            />
          );
        })}
      </section>
      <div
        className={`comment-mid-lines ${classnames({
          hidden: !comments.me?.length,
        })}`}
      >
        <span className="comment-mid-line" />
        <span className="comment-mid-text">
          以上留言被精选后，将对所有人可见
        </span>
        <span className="comment-mid-line" />
      </div>
      <section className="mt-4">
        {comments?.excellent?.map((item, index) => {
          const bordert0 = comments.me.length && index === 0;
          return (
            <CommentItem
              onDelete={() => handleDeleteComment(item.commentId)}
              key={item.commentId}
              data={item}
              className={classnames({ 'border-t-0': bordert0 })}
            />
          );
        })}
      </section>
      <CommentInput />
    </section>
  );
};
