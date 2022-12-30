import { useEffect, useState } from 'react';
import { useSearchParam } from 'react-use';
import classnames from 'classnames';

export interface TabItem {
  title: string;
  key: string;
}

interface Props {
  onChange?(activeKey: string, title: string): void;
  tabs: TabItem[];
}

// 滚动达到距离顶部的位置
// const targetTop = 48 + 28;

export const Tabs = (props: Props) => {
  const { tabs, onChange } = props;
  const [activeKey, setActiveKey] = useState('');
  const moduleId = useSearchParam('moduleId') || '';

  const toggle = (key: string, title: string) => {
    onChange?.(key, title);
    setActiveKey(key);
  };

  useEffect(() => {
    const tab = tabs?.[0] || {};
    let { key } = tab;
    if (!key) return;
    if (moduleId) {
      key = moduleId;
    }
    setActiveKey(key);
    onChange?.(key, tab.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs, moduleId]);

  return (
    <section
      id="tabs"
      className="w-full overflow-auto bg-dark-100 tabs-container"
    >
      <section className="flex items-center pt-7 pb-6">
        {tabs?.map((item) => {
          const activeClass = classnames({
            'tabs-item-active': item.key === activeKey,
          });
          return (
            <span key={item.key} className={`tabs-item ${activeClass}`}>
              <span
                className="tabs-item-name"
                onClick={() => toggle(item.key, item.title)}
              >
                {item.title}
              </span>
              <span className="tabs-item-line" />
            </span>
          );
        })}
      </section>
    </section>
  );
};
