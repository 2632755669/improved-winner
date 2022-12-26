import { Modal, message } from '@ss/mtd-react';
import { useContext } from 'react';
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
        评价({comments?.length})
      </h3>
      <section className="mt-4">
        {comments?.map((item) => {
          return (
            <CommentItem
              onDelete={() => handleDeleteComment(item.commentId)}
              key={item.commentId}
              data={item}
            />
          );
        })}
      </section>
      <CommentInput />
    </section>
  );
};
