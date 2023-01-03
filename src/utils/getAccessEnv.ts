export const getAccessEnv = () => {
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|Android|ios|iOS|iPad|WebOS|Symbian|Windows Phone|Phone)/i,
    )
  ) {
    return 'MO';
  }

  return 'PC';
};
