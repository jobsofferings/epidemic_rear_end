const INEWS_AUTO_URL = `https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules`
const INEWS_INNER_URL = `https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules`

export enum AutoOptions {
  COUNTRY_CONFORM_ADD = 'FAutoCountryConfirmAdd',
  FOREIGN_LIST = 'FAutoforeignList',
};

export enum InnerOptions {
  CHINA_DAY_LIST = 'chinaDayList',
};

export const getAutoPostUrl = (...options) => `${INEWS_AUTO_URL}=${options.join(',')}`;
export const getInnerPostUrl = (...options) => `${INEWS_INNER_URL}=${options.join(',')}`;