
module.exports = ({ file }) => {
  const plugins = [
    require('autoprefixer'),
    require('cssnano')({
      safe: true
    })
  ];


  return {
    plugins
  };
};
