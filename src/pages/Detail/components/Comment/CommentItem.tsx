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
}

export const CommentItem = (props: Props) => {
  const { data } = props;

  return (
    <section className="flex text-white-84 text-base py-6 border-bottom-gray comment-item-container">
      <img
        src={data.avatar}
        alt="user-avatar"
        className="w-28px h-28px rounded-full object-cover img-border"
      />
      <section className="ml-2">
        <div>
          <span>{data.name}</span>
          <span className="text-white-42 text-sm ml-2">{data.creatTime}</span>
        </div>
        <p className="mt-1.5 leading-snug">{data.content}</p>
      </section>
    </section>
  );
};
