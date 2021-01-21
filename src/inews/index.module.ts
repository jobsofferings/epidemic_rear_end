import { HttpModule, Module } from '@nestjs/common';
import { InewsService } from './index.service';

@Module({
  imports: [HttpModule.register({
    baseURL: ''
  })],
  providers: [InewsService]
})
export class InewsModule { }
