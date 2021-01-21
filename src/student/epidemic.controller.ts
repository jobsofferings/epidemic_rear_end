import { Controller, Get, Inject } from '@nestjs/common';
import { ScheduleService } from 'src/schedule/schedule.service';
import { EpidemicService } from './epidemic.service';

@Controller('epidemic')
export class EpidemicController {
  private scheduleService: ScheduleService;

  constructor(
    private readonly epidemicService: EpidemicService,
    @Inject('ScheduleService') scheduleService: ScheduleService
  ) {
    this.scheduleService = scheduleService;
  }

  @Get()
  index() {
    return this.epidemicService.epidemicInfo();
  }

  @Get('add')
  add() {
    const result = this.epidemicService.add({
      'name': '王麻子',
      'age': 20,
    })
    return result;
  }

  @Get('update')
  update() {
    const result = this.epidemicService.update({
      'name': '王麻子'
    }, {
      'name': '更新后的名字'
    })
    return result;
  }

  @Get('delete')
  delete() {
    this.scheduleService.createJob();
    const result = this.epidemicService.delete({
      'name': '更新后的名字'
    })
    return result;
  }
  
}