import { Injectable, HttpService } from '@nestjs/common';
import { getAutoPostUrl, AutoOptions, getInnerPostUrl, InnerOptions } from 'src/util/InewsAuto';

@Injectable()
export class InewsService {

  constructor(private readonly httpService: HttpService) { }

  getCountryConfirmAdd() {
    return this.httpService.post(getAutoPostUrl(AutoOptions.COUNTRY_CONFORM_ADD), {}).toPromise();
  }

  getForeignList() {
    return this.httpService.post(getAutoPostUrl(AutoOptions.FOREIGN_LIST), {}).toPromise();
  }

  getChinaDayList() {
    return this.httpService.post(getInnerPostUrl(InnerOptions.CHINA_DAY_LIST), {}).toPromise();
  }

}