import { Controller, Get, Param, Body, Post, Req } from '@nestjs/common';
import { Country } from '../interfaces/country.interface';
import { CountrysService } from './country.service';

interface AllCountryProps {
  msg: Country
  flag: boolean
}

@Controller('country')
export class CountryController {

  constructor(private countrysService: CountrysService) { }

  @Get(':id')
  getPedantsTypeById(@Param() params) {
    console.log(params);
    return this.countrysService.findAll();
  }

  @Post()
  allCountry(
    @Body() createCountryTypeDto: Country
  ): AllCountryProps {
    return { msg: createCountryTypeDto, flag: false };
  }

}
