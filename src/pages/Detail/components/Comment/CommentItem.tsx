import { Button } from '@ss/mtd-react';
import defaultAvatar from '../../../../assets/images/defaultAvatar.png';

export interface CommentItemType {
  avatar: string;
  name: string;
  creatTime: string;
  commentId: string;
  isMyComment: boolean;
  content: string;
}

interface Props {
  data: CommentItemType;
  onDelete?(): void;
}

export const CommentItem = (props: Props) => {
  const { data, onDelete } = props;

  return (
    <section className="flex text-white-84 text-base py-6 border-bottom-gray comment-item-container">
      <img
        src={data.avatar || defaultAvatar}
        alt="user-avatar"
        className="w-28px h-28px rounded-full object-cover img-border"
      />
      <section className="ml-2">
        <div>
          <span>{data.name}</span>
          <span className="text-white-42 text-sm ml-2">{data.creatTime}</span>
        </div>
        <p className="mt-1.5 leading-snug">{data.content}</p>
        {data.isMyComment ? (
          <Button
            className="mt-1.5"
            onClick={() => onDelete?.()}
            shape="text"
            icon="delete-o"
          />
        ) : null}
      </section>
    </section>
  );
};
