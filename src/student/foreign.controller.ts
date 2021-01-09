import { Controller, Get } from '@nestjs/common';
import { ForeignService } from './foreign.service';

@Controller('foreign')
export class ForeignController {

    constructor(private readonly foreignService: ForeignService) { }

    @Get()
    index() {
        return this.foreignService.foreignInfo();
    }
}