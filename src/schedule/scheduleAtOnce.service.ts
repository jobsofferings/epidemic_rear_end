import { Injectable, Logger } from '@nestjs/common';
import { Interval, NestSchedule } from 'nest-schedule';
import { TencentNewsService } from 'src/tencentNews/index.service';

@Injectable()
export class ScheduleAtOnceService extends NestSchedule {

  private readonly logger = new Logger(ScheduleAtOnceService.name)
  
  constructor(
    private readonly tencentNewsService: TencentNewsService
  ) {
    super();
    this.intervalJob();
  }

  @Interval(1000 * 60 * 60 * 24)
  async intervalJob() {
    this.logger.log('开始爬取');
    const promises = [
      this.tencentNewsService.getChinaDayList(),
      // this.tencentNewsService.getCountryConfirmAdd(),
      // this.tencentNewsService.getForeignList()
    ];
    Promise.allSettled(promises).then((res: any) => {
      // console.log(res);
    })
    // 可以后续将这个位置的请求整合
    // 若存在报错则停止interval，return true
    return false;
  }

}