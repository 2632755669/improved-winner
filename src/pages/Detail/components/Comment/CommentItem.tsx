import classnames from 'classnames';
import defaultAvatar from '../../../../assets/images/defaultAvatar.png';

enum labelEnum {
  'FEATURED' = 'FEATURED',
  'NON_FEATURED' = 'NON_FEATURED',
}

export interface CommentItemType {
  avatar: string;
  name: string;
  creatTime: string;
  commentId: string;
  isMyComment: boolean;
  content: string;
  label: labelEnum;
}

interface Props {
  data: CommentItemType;
  onDelete?(): void;
  className?: string;
  disPlayTip?: boolean;
}

export const CommentItem = (props: Props) => {
  const { data, onDelete, className, disPlayTip } = props;

  return (
    <>
      <section
        className={`flex text-white-84 text-base py-6 ${classnames({
          'border-bottom-gray': !disPlayTip,
        })} comment-item-container ${className || ''}`}
      >
        <img
          src={data.avatar || defaultAvatar}
          alt="user-avatar"
          className="w-28px h-28px rounded-full object-cover img-border"
        />
        <section className="ml-2">
          <div>
            <span>{data.name}</span>
            <span className="text-white-42 text-sm ml-2">{data.creatTime}</span>
            {data.label === labelEnum.NON_FEATURED ? (
              <span className="comment-item-label">未精选</span>
            ) : null}
          </div>
          <p className="mt-1.5 leading-snug">{data.content}</p>
          {data.isMyComment ? (
            <span
              className="mt-1.5 text-white-42 text-sm cursor-pointer"
              onClick={() => onDelete?.()}
            >
              删除
            </span>
          ) : null}
        </section>
      </section>
      {disPlayTip ? (
        <div className="comment-mid-lines">
          <span className="comment-mid-line" />
          <span className="comment-mid-text">
            以上留言被精选后，将对所有人可见
          </span>
          <span className="comment-mid-line" />
        </div>
      ) : null}
    </>
  );
};
