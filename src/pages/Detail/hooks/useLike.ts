import { useState, useEffect } from 'react';
import { message } from '@ss/mtd-react';
import {
  likeApi,
  cancelLikeApi,
  getLikeCount,
  getLikeStatus,
} from '../../../apis/common';
import { thousandthNumber, thousandthToNumber } from '../../../utils';

// 点赞
export const useLike = (id: string) => {
  const [likeCount, setLikeCount] = useState('0');
  const [isLike, setIsLike] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  // 点赞和取消点赞
  const likeAction = () => {
    if (likeLoading) return;
    setLikeLoading(true);
    if (!isLike) {
      likeApi(id)
        .then(() => {
          message.success({ message: '点赞成功' });
          setIsLike(true);
          setLikeCount((value) => {
            const num = thousandthToNumber(value);
            return thousandthNumber(num + 1);
          });
        })
        .finally(() => setLikeLoading(false));
    } else {
      cancelLikeApi(id)
        .then(() => {
          message.success({ message: '取消点赞成功' });
          setIsLike(false);
          setLikeCount((value) => {
            const num = thousandthToNumber(value);
            return thousandthNumber(num - 1);
          });
        })
        .finally(() => setLikeLoading(false));
    }
  };

  const fetchLikeCount = () => {
    getLikeCount(id).then((data) => {
      setLikeCount(thousandthNumber(data) || '0');
    });
  };
  const fetchLikeStatus = () => {
    getLikeStatus(id).then((data) => {
      setIsLike(data || false);
    });
  };

  useEffect(() => {
    fetchLikeCount();
    fetchLikeStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    likeCount,
    isLike,
    likeAction,
    likeLoading,
  };
};
