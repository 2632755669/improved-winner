import { useCallback } from 'react';

export const useSerivcer = ({ misId }) => {
  const contactLink = `xxx id=${misId}`;
  const onContact = useCallback(() => {
    const a = document.createElement('a');
    a.href = contactLink;
    a.target = '_blank';
    a.click();
  }, []);

  return onContact;
};
