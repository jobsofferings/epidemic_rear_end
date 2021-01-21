import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionsName } from 'src/config/collections';
import { InewsService } from 'src/inews/index.service';
import { ChinaSchema } from 'src/schema/china.schema';
import { TencentNewsService } from './index.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'China',
        schema: ChinaSchema,
        collection: CollectionsName.China
      },
    ])
  ],
  providers: [TencentNewsService, InewsService]
})
export class TencentNewsModule { }
