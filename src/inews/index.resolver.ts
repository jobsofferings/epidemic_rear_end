import { Resolver, Query } from '@nestjs/graphql';
import { InewsService } from './index.service';

@Resolver('global')
export class InewsResolver {

  constructor(
    private readonly globalService: InewsService,
  ) { }

  @Query('getCountryConfirmAdd')
  async getCountryConfirmAdd() {
    const { data: { data } } = await this.globalService.getCountryConfirmAdd();
    return { data: data?.FAutoCountryConfirmAdd || {} };
  }

  @Query('getForeignList')
  async getForeignList() {
    const { data: { data } } = await this.globalService.getForeignList();
    return { list: data?.FAutoforeignList || [] };
  }

  @Query('getChinaDayList')
  async getChinaDayList() {
    const { data: { data } } = await this.globalService.getChinaDayList();
    return { list: data?.chinaDayList || [] };
  }

}
