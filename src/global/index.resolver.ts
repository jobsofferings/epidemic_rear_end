import { Resolver, Query } from '@nestjs/graphql';
import { GlobalService } from './index.service';

@Resolver('global')
export class GlobalResolver {

  constructor(
    private readonly globalService: GlobalService,
  ) { }

  @Query('getCountryConfirmAdd')
  async getCountryConfirmAdd() {
    const { data: { data } } = await this.globalService.getCountryConfirmAdd();
    return { data: data?.FAutoCountryConfirmAdd || {} };
  }

}
