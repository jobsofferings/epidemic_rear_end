import { Injectable } from '@nestjs/common';
import { Country } from '../interfaces/country.interface';
 
@Injectable()
export class CountrysService {
  private readonly countrys: Country[] = [];

  create(country: Country) {
    this.countrys.push(country);
  }

  findAll(): Country[] { 
    return this.countrys;
  }
}