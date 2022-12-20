module.exports = () => {
  const plugins = [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano')({
      safe: true,
    }),
    require('postcss-px2rem')({
      remUnit: 16,
      remPrecision: 9,
    }),
  ];

  return {
    plugins,
  };
};
