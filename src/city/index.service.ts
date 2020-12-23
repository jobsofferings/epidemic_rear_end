import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class CityService {

  constructor(private readonly httpService: HttpService) { }

  getCity(req) {
    return this.httpService.post(`https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoforeignList`, {}).toPromise();
  }

}