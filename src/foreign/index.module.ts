import { HttpModule, Module } from '@nestjs/common';
import { ForeignResolver } from './index.resolver';
import { ForeignService } from './index.service';

@Module({
  imports: [HttpModule.register({
    baseURL: ''
  })],
  providers: [ForeignResolver, ForeignService]
})
export class ForeignModule { }
