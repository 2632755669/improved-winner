import { useEffect, useState } from 'react';
import { useSearchParam } from 'react-use';
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
  const [activeKey, setActiveKey] = useState('');
  const moduleId = useSearchParam('moduleId') || '';

  const toggle = (key: string) => {
    onChange?.(key);
    setActiveKey(key);
  };

  useEffect(() => {
    let key = tabs?.[0]?.key;
    if (!key) return;
    if (moduleId) {
      key = moduleId;
    }
    setActiveKey(key);
    onChange?.(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs, moduleId]);

  return (
    <section id="tabs" className="flex items-center pt-7 pb-6 mt bg-dark-100">
      {tabs?.map((item) => {
        const activeClass = classnames({
          'tabs-item-active': item.key === activeKey,
        });
        return (
          <span key={item.key} className={`tabs-item ${activeClass}`}>
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
