import { Module } from '@nestjs/common';
import { CityResolver } from './index.resolver';

@Module({
  controllers: [],
  providers: [CityResolver]
})
export class CityModule {}
