import { Controller, Get, Param, Body, Post, Req } from '@nestjs/common';
import { CountryTypeDto } from './create-country.dto';
import { CountrysService } from './country.service';

interface AllCountryProps {
  msg: CountryTypeDto
  success: boolean
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
    @Body() createCountryTypeDto: CountryTypeDto
  ): AllCountryProps {
    return { msg: createCountryTypeDto, success: false };
  }

}
