import { Injectable, HttpService } from '@nestjs/common';
import { getInewsAutoPostUrl, InewsOptions } from 'src/util/InewsAuto';

@Injectable()
export class GlobalService {

  constructor(private readonly httpService: HttpService) { }

  getCountryConfirmAdd() {
    return this.httpService.post(getInewsAutoPostUrl(InewsOptions.COUNTRY_CONFORM_ADD), {}).toPromise();
  }

}