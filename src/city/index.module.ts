import { HttpModule, Module } from '@nestjs/common';
import { CityResolver } from './index.resolver';
import { CityService } from './index.service';

@Module({
  imports: [HttpModule.register({
    baseURL: ''
  })],
  providers: [CityResolver, CityService]
})
export class CityModule { }
