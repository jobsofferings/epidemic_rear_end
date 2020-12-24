import { Injectable, HttpService } from '@nestjs/common';
import { getInewsAutoPostUrl, InewsOptions } from 'src/util/InewsAuto';

@Injectable()
export class ForeignService {

  constructor(private readonly httpService: HttpService) { }

  getForeign() {
    return this.httpService.post(getInewsAutoPostUrl(InewsOptions.FOREIGN_LIST), {}).toPromise();
  }

}