import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import moment from 'moment';
import { InewsService } from 'src/inews/index.service';

@Injectable()
export class TencentNewsService {

  constructor(
    @InjectModel('China') private readonly chinaModel,
    private readonly inewsService: InewsService
  ) { }

  async getChinaDayList() {
    const res = await this.inewsService.getChinaDayList();
    const chinaDayList = res?.data?.data?.chinaDayList;
    console.log(chinaDayList.map(({ y, date, deadRate, healRate, ...item }) => {
      return {
        ...item,
        time: new Date(`${y}.${date}`).getTime() / 1000,
      }
    }));
    return this.chinaModel.insertMany()
  }

}