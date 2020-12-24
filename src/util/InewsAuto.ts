const INEWS_AUTO_URL = `https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules`

export enum InewsOptions {
  COUNTRY_CONFORM_ADD = 'FAutoCountryConfirmAdd',
  FOREIGN_LIST = 'FAutoforeignList',
};

export const getInewsAutoPostUrl = (...options) => `${INEWS_AUTO_URL}=${options.join(',')}`;