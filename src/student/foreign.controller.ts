import { Controller, Get } from '@nestjs/common';
import { ForeignService } from './foreign.service';

@Controller('foreign')
export class ForeignController {

  constructor(private readonly foreignService: ForeignService) { }

  @Get()
  async index() {
    const res = await this.foreignService.foreignInfo();
    return { res };
  }
}