/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export const useScroll = (el: string | Element | null) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [target, setTarget] = useState<Element | null>(null);

  const scrollListen = throttle(() => {
    if (!target) return;
    const { top } = target.getBoundingClientRect();
    console.log(top);
    setScrollTop(top);
  }, 300);

  useEffect(() => {
    const element = typeof el === 'string' ? document.querySelector(el) : el;
    setTarget(element);
    window.addEventListener('scroll', scrollListen, true);
    return () => window.removeEventListener('scroll', scrollListen);
  }, [el]);

  return {
    scrollTop,
  };
};
