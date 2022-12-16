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
    <section className="flex w-full mt-6">
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
                <Input.TextArea />
              </Form.Item>
            </Form>
            <div className="flex justify-end w-full">
              <Button onClick={handleToogle} type="normal">
                取消
              </Button>
              <Button
                loading={submitLoading}
                onClick={submit}
                className="ml-4"
                type="primary"
              >
                提交
              </Button>
            </div>
          </>
        )}
      </section>
    </section>
  );
};
