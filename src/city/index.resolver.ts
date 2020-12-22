import { Args, Resolver, Query } from '@nestjs/graphql';

@Resolver('city')
export class CityResolver {

  constructor() { }

  @Query('city')
  async city(@Args('req') req) {
    console.log(req);
    return { msg: { name: 'jobs', sort: 1 }, flag: false };
  }

}
