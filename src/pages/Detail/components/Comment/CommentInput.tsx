import { useState, useRef } from 'react';
import { Form, Input, Button } from '@ss/mtd-react';

const avatarUrl =
  'https://p0.meituan.net/smarttestvenus/5d52f8079871447d464f82c75e0cc1dc44568.jpg';

export const CommentInput = () => {
  const formRef = useRef<any>({});
  const [isInputing, setIsInputing] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleToogle = () => {
    setIsInputing((val) => !val);
  };

  const submit = () => {
    setSubmitLoading(true);
    if (formRef?.current?.validateFields()) {
      console.log('提交');
      handleToogle();
    }
    setSubmitLoading(false);
  };

  return (
    <section className="comment-container flex w-full mt-6">
      <img
        src={avatarUrl}
        alt="user-avatar"
        className="w-28px h-28px rounded-full object-cover"
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
                  autosize={{ minRows: 4, maxRows: 4 }}
                  className="comment-text-area"
                />
              </Form.Item>
            </Form>
            <div className="flex w-full">
              <Button loading={submitLoading} onClick={submit} type="primary">
                发送
              </Button>
              <Button onClick={handleToogle} className="ml-3" type="normal">
                取消
              </Button>
            </div>
          </>
        )}
      </section>
    </section>
  );
};
