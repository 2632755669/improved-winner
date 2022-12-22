const CracoLessPlugin = require('craco-less');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const NODE_ENV = ['staging, production'].includes(process.env.AWP_DEPLOY_ENV) ? 'production' : 'test';

const ssoConfig = {
  production: {
    clientId: '028999243f',
    // TODO：暂时没有换上正确的secret
    secret: 'f352ceed984048719f69fa5d814befff',
  },
  test: {
    clientId: '1a5c3e71bd',
    secret: '360f43414e91433e81d8bd7779022588',
  },
};

module.exports = {
  devServer: {
    proxy: {
      '/wukong': {
        target: 'http://huhaoxing-wxcrh-sl-mtv.cap.test.sankuai.com',
        changeOrigin: true,
        onProxyReq(proxyReq) {
          // const cookie = '_lxsdk_cuid=170c84c5a0cc8-0a116fca555588-39647b09-1fa400-170c84c5a0cc8; _lxsdk=170c84c5a0cc8-0a116fca555588-39647b09-1fa400-170c84c5a0cc8; s_u_745896="Egs/r4pi3Bd4sHeOiBq+dw=="; u=1534834813; cap_login_type=SSO; webNewUuid=d86d28cc75d22f0dfb14b032c23374c9_1637837082534; belongTeam=cap; e047716445_ssoid=eAGFji1LBFEUQHlt2SQLgnGiu8F5776Pe59tx5m-YBAssu9j4loUi8E1mBRFt7hBDGJ0i6LFJCKYLILBOjhg0l-gImbrgXM4DTa1eztiydHHw_glhWbkClEYpfR8Yj1y9FHEvkclFDjpRMcZAtd3aLjOnlirvRTdoo-DuNnNF4pC56gztDonsFiQIACuckWmyJL3z5PRawr_ZulnqHd_93j1nG4z0Wx2vV9dH6z1NkJrur48r_avq4O9arLzdjqsL87qyXCGJVs3x-3ZX-eQNf6mxmwukAlA3qMOACUPpRPKcQkepETl7YowEkkiJ9BSLSfGKl5yH4PsWPXNLGn0ZEvpTCQt-BfEKWRA**eAENyMcRwEAIBLCWgCW5HIbQfwlnPXUyKW7tOSosDFgstIQvVg11ihiqrzeFonVYidYd_1jdAxkXEO4; s_m_id_3299326472="AwMAAAA5AgAAAAEAAAE9AAAALMDF85EwgVRsCPrUY4Q7rhl6NSDBCfExhQH9n0154YPorGJAieb474z94VWXAAAAIzO6sIgjMKClzEjhoB45Bw++13Vwt/iVd6H8VhKr7TEVIVbC"; _lxsdk_s=17d7e216227-fc8-aaa-bea%7C%7C93'
          // const cookie = '_lxsdk_cuid=170c84c5a0cc8-0a116fca555588-39647b09-1fa400-170c84c5a0cc8; _lxsdk=170c84c5a0cc8-0a116fca555588-39647b09-1fa400-170c84c5a0cc8; s_u_745896="Egs/r4pi3Bd4sHeOiBq+dw=="; u=1534834813; cap_login_type=SSO; webNewUuid=d86d28cc75d22f0dfb14b032c23374c9_1637837082534; belongTeam=cap; s_m_id_3299326472="AwMAAAA5AgAAAAEAAAE9AAAALMDF85EwgVRsCPrUY4Q7rhl6NSDBCfExhQH9n0154YPorGJAieb474z94VWXAAAAI3xBh9BCoVTuJPf+LZSx4uuE1ndvWivIWIIK4R+C5mjTs/yu"; e047716445_ssoid=eAGFzq1LBEEYgHGmHZvkQDBu9C64M-98vDO2W3f7gUGwyM5XPItiMXgGk6IcFk2Gw-jBoWgxiYImi2CwLm4wWOwiYvYPeB5-LTKzf3tM0q_x48drBkmgApEpIeRiahxSdIGFyqFgAiy3rGuVBltZVFTmz6TdWQl22YVB2O4VS2UpC5Q5GlloMFhqpgGoKIRWZZ5-Poymbxn8u9U_oP793dPVS7ZLWJL0nFvfHGz0t3x7trk8rw-v66ODerL3fjZsLsbNZDhH0p2bk878bzMirT_UKVnwWnnQzqH0AJH6aJmwlIMDzlE4s8YUR82RapBcrKbANYvWx4p2KxGlMczJChz3Shjlo_4GOl5lbw**eAEFwYEBwCAIA7CXOleGnFMq_n_CEteWhA_EdG2QV9WOPcxALUQb86RlBkPZjHNz5HqXfH48WBIH; _lxsdk_s=17d886bf9f9-011-89-c93%7C%7CNaN'
          const cookie = '_lxsdk_cuid=170c84c5a0cc8-0a116fca555588-39647b09-1fa400-170c84c5a0cc8; _lxsdk=170c84c5a0cc8-0a116fca555588-39647b09-1fa400-170c84c5a0cc8; s_u_745896="Egs/r4pi3Bd4sHeOiBq+dw=="; u=1534834813; cap_login_type=SSO; webNewUuid=d86d28cc75d22f0dfb14b032c23374c9_1637837082534; belongTeam=cap; s_m_id_3299326472="AwMAAAA5AgAAAAEAAAE9AAAALNXwQ+InXeQ97VsObL4uSSyBAkKB0K/N4GlZExVGCbyushDeWEj+FTdrzcj5AAAAI+iEO0LiensLw/Hw3rRCjfRa8Vhgcrhjq8EJsTZfY0IGI8vR"; _lxsdk_s=17d943154af-c0d-d92-89f%7C%7C6; e047716445_ssoid=eAGFzi9LBEEYgHGmHZvkQDBu9C64M--8s--s7dbdfmAQLLLz7mw8i2IxeAaToohFk-Cfdl5R1GASixosBsPFxf0EZhEx-wGeh19LTO0-HIlw8nX_8hFB4CUSqRjRzIcJkyT2yhdMqBCcdqrrYguucBRLk76JdmfJu0X2A7_Zyxby3GRkUkpMZiGh3CoLIDFDG-dpeHbxOppE8O_W_oD6T4_PN-_RtlBB0GNeXR-s9TfK9nRzfVnv39YHe_V45_N02FydN-PhjAi37o47s7_NoWj9oU7EXGnjEiwzmRKgkmXlFDqpgUFrQk5WVKzJapIWjMblkKmqdIGJrboGS3YFMtrCJCABvHHwDSAqZTs**eAEFwQcRwEAMAzBK7uWz4DiLP4RKU09phH-1xMuq0TWuNNI3hotZZfklTE6ovGkJZwA5_QNsVBL4; belongTeam=cap';
          // const cookie = '_lxsdk_cuid=170c84c5a0cc8-0a116fca555588-39647b09-1fa400-170c84c5a0cc8; _lxsdk=170c84c5a0cc8-0a116fca555588-39647b09-1fa400-170c84c5a0cc8; s_u_745896="Egs/r4pi3Bd4sHeOiBq+dw=="; u=1534834813; cap_login_type=SSO; webNewUuid=d86d28cc75d22f0dfb14b032c23374c9_1637837082534; belongTeam=cap; s_m_id_3299326472="AwMAAAA5AgAAAAEAAAE9AAAALNXwQ+InXeQ97VsObL4uSSyBAkKB0K/N4GlZExVGCbyushDeWEj+FTdrzcj5AAAAIzJEPHxF2ZZp4UiG9DNTxgqLIpT6UheKr/Z2/sm6kBe4HwCZ"; e047716445_ssoid=eAGFzj8vBEEYgPFMd9lKLpEot3RX2Jl33pl3Vndrt79EIdHIzp8tT0M0CiuiIgSRUClQuobQaIhGQ6NQKDf2K-hERO0DPE9-HTaxc3_E4oeX-vg9gShwJBIaUc3GqSNOLohQOkKBYKUVfasN2NKS5ip7Zd3eQrDzLozC-iCfKwqVk8ooVbmBlAojDADHHI0usvji63DrI4F_t-YHNHx6fL55SzaZiKKBc8uro5Xhmu9OtteXzd5ts7_bjLc_z-r26rwd11Ms3rg76U3_Nges84c6ZTPeaA_GOVIeoOK-sgItl-BASkKXLgktyUjiBpTExbhU1tuAUMo-R62hROeU4liR9BwEfANH8GQD**eAENyNEVADEEBMCWvJUsyiHov4S7-RyCRZ_zLJ-GtktzLGYmYbwlIfiTnul90FdXVisxWCbwATzXEbc; _lxsdk_s=17d8d96f725-4e5-111-9d6%7C%7C7; belongTeam=cap'
          proxyReq.setHeader('cookie', `${cookie}`);
        },
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
