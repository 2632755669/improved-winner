module.exports = () => {
  const plugins = [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano')({
      safe: true,
    }),
  ];

  return {
    plugins,
  };
};
