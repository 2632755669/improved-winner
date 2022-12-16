const avatarUrl =
  'https://p0.meituan.net/smarttestvenus/5d52f8079871447d464f82c75e0cc1dc44568.jpg';

export const CommentItem = () => {
  return (
    <section className="flex text-white-84 text-base py-6 border-top-gray border-bottom-gray">
      <img
        src={avatarUrl}
        alt="user-avatar"
        className="w-28px h-28px rounded-full object-cover"
      />
      <section className="ml-2">
        <div>
          <span>刘亦菲/liuyifei</span>
          <span className="text-white-42 text-sm ml-2">12-02 06:10</span>
        </div>
        <p className="mt-1.5 leading-snug">
          很多外部合作伙伴都很关注数字经济话题。这本书用详实的案例和数据，介绍了生活服务业数字化发展的情况，也介绍了美团的实践。我们在拜访高校老师、学会时会赠送这本书，客户反馈很不错。有简装本和礼盒版，可以轻松适配各类对外交流场合～
        </p>
      </section>
    </section>
  );
};
