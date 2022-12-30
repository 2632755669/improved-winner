/* eslint-disable no-console */
/* eslint-disable camelcase */
// eslint-disable-next-line import/no-cycle

const ENV = process.env.REACT_APP_ENV;
const isProd = ['staging', 'prod', 'production'].indexOf(ENV) > -1;

// https://docs.sankuai.com/lx/web/extensions/
// 自定义参数
const defaultCustom = {};

// 通用参数
const defaultValLab = {};
/* eslint-disable no-shadow */
export const pageView = function pageView({
  cid,
  custom = null,
  env = null,
  valLab = {},
}) {
  try {
    const _valLab = {
      ...defaultValLab,
      ...valLab,
    };
    const _custom = {
      ...defaultCustom,
      ..._valLab,
      ...custom,
    };
    _valLab.custom = _custom;
    if (isProd && window.LXAnalytics) {
      window.LXAnalytics('pageView', _valLab, env, cid);
    } else {
      // 打印出埋点数据
      console.log(`pageView:${cid}`, _valLab);
      window.LXAnalytics('pageView', _valLab, env, cid);
    }
  } catch (error) {
    console.error(error);
  }
};

export const moduleClick = function moduleClick({
  bid,
  custom = null,
  options = null,
  valLab = {},
}) {
  try {
    const _valLab = {
      ...defaultValLab,
      ...valLab,
    };
    const _custom = {
      ...defaultCustom,
      ..._valLab,
      ...custom,
    };
    _valLab.custom = _custom;
    if (isProd && window.LXAnalytics) {
      window.LXAnalytics('moduleClick', bid, _valLab, options);
    } else {
      // 打印出埋点数据
      console.log(`moduleClick:${bid}`, _valLab);
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * 模块曝光事件
 * @param {Object} params
 */
export const moduleView = function moduleView({
  bid,
  custom = null,
  options = null,
  valLab = {},
}) {
  try {
    const _valLab = {
      ...defaultValLab,
      ...valLab,
    };
    const _custom = {
      ...defaultCustom,
      ..._valLab,
      ...custom,
    };
    _valLab.custom = _custom;
    if (isProd && window.LXAnalytics) {
      window.LXAnalytics('moduleView', bid, _valLab, options);
    } else {
      // 打印出埋点数据
      console.log(`moduleView:${bid}`, _valLab);
    }
  } catch (error) {
    console.error(error);
  }
};

// 如果上报mv事件之后要离开页面 给50ms的delay确保事件上报 参考灵犀文档
export const mvDelayLeave = function mvDelayLeave(func) {
  if (window.LXAnalytics) {
    setTimeout(func, 50);
  } else {
    func();
  }
};
