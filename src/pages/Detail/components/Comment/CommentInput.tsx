import { useState, useRef, useContext } from 'react';
import { Form, Input, Button, message } from '@ss/mtd-react';
import { CommentContext } from '../../context/CommentContext';
import { UserInfoContext } from '../../../../context/UserInfoContext';
import defaultAvatar from '../../../../assets/images/defaultAvatar.png';

export const CommentInput = () => {
  const formRef = useRef<any>({});
  const [isInputing, setIsInputing] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const { publishComment } = useContext(CommentContext);
  const { avatar } = useContext(UserInfoContext);

  const handleToogle = () => {
    setIsInputing((val) => !val);
  };

  const submit = () => {
    const { content } = formRef.current?.getFieldsValue();
    if (content && content.trim() !== '') {
      setSubmitLoading(true);
      publishComment(content)
        .then(() => {
          handleToogle();
        })
        .finally(() => setSubmitLoading(false));
    } else {
      message.error({ message: '请填写评论内容再提交' });
    }
  };

  const handleValueChange = (e: any) => {
    if (e?.target?.value?.trim()) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  return (
    <section className="comment-container flex w-full mt-6">
      <img
        src={avatar || defaultAvatar}
        alt="user-avatar"
        className="w-28px h-28px rounded-full object-cover img-border"
      />
      <section className="ml-2 flex-1 text-base">
        {!isInputing ? (
          <p
            className="cursor-text text-white-24 leading-8 pl-1.5 border border-solid border-white-12 rounded-md"
            onClick={handleToogle}
          >
            我也说两句
          </p>
        ) : (
          <>
            <Form ref={formRef}>
              <Form.Item formItemKey="content">
                <Input.TextArea
                  maxLength={3000}
                  toFormItem
                  autosize={{ minRows: 4, maxRows: 4 }}
                  className="comment-text-area"
                  onInput={handleValueChange}
                />
              </Form.Item>
            </Form>
            <div className="flex w-full">
              <Button
                loading={submitLoading}
                disabled={disabledBtn}
                className="comment-btn-confirm"
                onClick={submit}
                type="primary"
              >
                发送
              </Button>
              <Button
                onClick={handleToogle}
                className="ml-3 comment-btn-cancel"
                type="normal"
              >
                取消
              </Button>
            </div>
          </>
        )}
      </section>
    </section>
  );
};
