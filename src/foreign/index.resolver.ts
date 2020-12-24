import { Resolver, Query } from '@nestjs/graphql';
import { ForeignService } from './index.service';

@Resolver('foreign')
export class ForeignResolver {

  constructor(
    private readonly foreignService: ForeignService,
  ) { }

  @Query('getForeignList')
  async getForeignList() {
    const { data: { data } } = await this.foreignService.getForeign();
    return { list: data?.FAutoforeignList || [] };
  }

}
