const CracoLessPlugin = require('craco-less');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const NODE_ENV = ['staging, production'].includes(process.env.AWP_DEPLOY_ENV) ? 'production' : 'test';

const apiHost = 'https://cap.fe.test.sankuai.com';

const ssoConfig = {
  production: {
    clientId: '028999243f',
    secret: '0ac08c040bab47699f7c45a5dc9cfc8c',
  },
  test: {
    clientId: '1a5c3e71bd',
    secret: '360f43414e91433e81d8bd7779022588',
  },
};

module.exports = {
  devServer: {
    proxy: {
      '/sapi/client/v1': {
        target: apiHost,
        changeOrigin: true,
      },
      '/comment': {
        target: apiHost,
        changeOrigin: true,
      },
    },
    before: (app) => {
      const { ExpressSSO } = require('@mtfe/sso-client');
      const ssoAuthMiddleware = ExpressSSO({
        clientId: ssoConfig[NODE_ENV].clientId,
        secret: ssoConfig[NODE_ENV].secret,
      });
      app.use(ssoAuthMiddleware);
    },
  },
  style: {
    postcss: {
      mode: 'file',
      loaderOptions: {
        config: {
          path: path.resolve(__dirname, './postcss.config.js'),
        },
      },
    },
  },
  plugins: [{
    add: [
      new webpack.DefinePlugin({
        process: { env: {} },
      }),
    ],
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  }],
  webpack: {
    configure: (webpackConfig, { paths }) => {
      if (process.env.NODE_ENV !== 'development') {
        // eslint-disable-next-line no-multi-assign
        paths.appBuild = webpackConfig.output.path = path.resolve('build/', 'v2');
        const publicUrl = `${process.env.PUBLIC_URL || process.env.PUBLIC_PATH}/v2/`;
        paths.publicUrlOrPath = publicUrl;
        webpackConfig.output.publicPath = publicUrl;
      }

      return webpackConfig;
    },
    plugins: [new NodePolyfillPlugin({ excludeAliases: ['console'] })],
  },
};
