import { Args, Resolver, Query } from '@nestjs/graphql';
import { CityService } from './index.service';

@Resolver('city')
export class CityResolver {

  constructor(
    private readonly cityService: CityService,
  ) { }

  @Query('city')
  async city(@Args('req') req) {
    const res = await this.cityService.getCity(req);
    console.log(res);
    return { msg: { name: 'jobs', sort: 1 }, flag: false };
  }

}
