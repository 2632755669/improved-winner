import { useState } from 'react';
import classnames from 'classnames';

export interface TabItem {
  title: string;
  key: string;
}

interface Props {
  onChange?(activeKey: string): void;
  tabs: TabItem[];
}

// 滚动达到距离顶部的位置
// const targetTop = 48 + 28;

export const Tabs = (props: Props) => {
  const { tabs, onChange } = props;
  const [activeKey, setActiveKey] = useState(tabs?.[0]?.key);

  const toggle = (key: string) => {
    onChange?.(activeKey);
    setActiveKey(key);
  };

  return (
    <section id="tabs" className="flex pt-7 pb-6 bg-dark-100">
      {tabs?.map((item) => {
        const activeClass = classnames({
          'tabs-item-active': item.key === activeKey,
        });
        return (
          <span className={`tabs-item ${activeClass}`}>
            <span className="tabs-item-name" onClick={() => toggle(item.key)}>
              {item.title}
            </span>
            <span className="tabs-item-line" />
          </span>
        );
      })}
    </section>
  );
};
