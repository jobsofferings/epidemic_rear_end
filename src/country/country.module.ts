import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountrysService } from './country.service';

@Module({
  controllers: [CountryController],
  providers: [CountrysService]
})
export class CountryModule {}
