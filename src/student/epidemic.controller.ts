import { Controller, Get } from '@nestjs/common';
import { EpidemicService } from './epidemic.service';

@Controller('epidemic')
export class EpidemicController {

  constructor(private readonly epidemicService: EpidemicService) { }

  @Get()
  index() {
    return this.epidemicService.epidemicInfo();
  }

  @Get('add') // 添加数据
  add() {
    let result = this.epidemicService.add({
      'name': '王麻子',
      'age': 20,
    })
    return result;
  }

  @Get('update') // 更新数据
  update() {
    let result = this.epidemicService.update({
      'name': '王麻子'
    }, {
      'name': '更新后的名字'
    })
    return result;
  }

  @Get('delete')
  delete() {
    let result = this.epidemicService.delete({
      'name': '更新后的名字'
    })
    return result;
  }

}