import { HttpModule, Module } from '@nestjs/common';
import { GlobalResolver } from './index.resolver';
import { GlobalService } from './index.service';

@Module({
  imports: [HttpModule.register({
    baseURL: ''
  })],
  providers: [GlobalResolver, GlobalService]
})
export class GlobalModule { }
