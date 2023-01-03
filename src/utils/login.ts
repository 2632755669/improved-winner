import Cookies from 'js-cookie';

const testTargetUrl = 'http://soa.cap.test.sankuai.com';
const localhost = 'localhost';

const RUNTIME_ENV = {
  LOCAL: 'local',
  DEV: 'dev',
  TEST: 'test',
  ST: 'st',
  STAGING: 'staging',
  PROD: 'prod',
  PRODUCTION: 'production',
};

const ENV_LOWERCASE =
  process.env.REACT_APP_ENV?.toLowerCase() || RUNTIME_ENV.TEST;

const logoutUrlMap = {
  [RUNTIME_ENV.LOCAL]: '/api/carrier/sso/logout2181',
  [RUNTIME_ENV.TEST]: '/api/carrier/sso/logout2181',
  [RUNTIME_ENV.STAGING]: '/api/carrier/sso/logout956',
  [RUNTIME_ENV.ST]: '/api/carrier/sso/logout956',
  [RUNTIME_ENV.PROD]: '/api/carrier/sso/logout1838',
  [RUNTIME_ENV.PRODUCTION]: '/api/carrier/sso/logout1838',
};

Cookies.set('cap_login_type', 'SSO');

export function getLogoutUrl() {
  let logoutUrl = logoutUrlMap[ENV_LOWERCASE];
  const nowUrl = encodeURIComponent(window.location.href);
  if (logoutUrl) {
    logoutUrl += `?redirect_uri=${nowUrl}`;
    if (window.location.hostname === localhost) {
      logoutUrl = testTargetUrl + logoutUrl;
    }
  } else {
    const { origin } = window.location;
    logoutUrl = `${origin}/sso/logout?redirect_uri=${nowUrl}`;
  }

  return logoutUrl;
}

export function logout() {
  const url = getLogoutUrl();
  window.location.href = url;
}
