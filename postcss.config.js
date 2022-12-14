module.exports = () => {
  const plugins = [
    require('autoprefixer'),
    require('cssnano')({
      safe: true,
    }),
  ];

  return {
    plugins,
  };
};
