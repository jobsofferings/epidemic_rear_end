import { HttpModule, Module } from '@nestjs/common';
import { InewsResolver } from './index.resolver';
import { InewsService } from './index.service';

@Module({
  imports: [HttpModule.register({
    baseURL: ''
  })],
  providers: [InewsResolver, InewsService]
})
export class InewsModule { }
