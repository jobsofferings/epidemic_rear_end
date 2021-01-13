import { Controller, Get } from '@nestjs/common';
import { EpidemicService } from './epidemic.service';

@Controller('epidemic')
export class EpidemicController {

  constructor(private readonly epidemicService: EpidemicService) { }

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
    const result = this.epidemicService.delete({
      'name': '更新后的名字'
    })
    return result;
  }

}