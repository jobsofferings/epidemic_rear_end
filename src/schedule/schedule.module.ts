import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from 'nest-schedule';
import { CollectionsName } from 'src/config/collections';
import { InewsService } from 'src/inews/index.service';
import { ChinaSchema } from 'src/schema/china.schema';
import { TencentNewsService } from 'src/tencentNews/index.service';
import { ScheduleService } from './schedule.service';
import { ScheduleAtOnceService } from './scheduleAtOnce.service';

@Module({
  imports: [
    ScheduleModule.register(),
    HttpModule.register({
      baseURL: ''
    }),
    MongooseModule.forFeature([
      {
        name: 'China',
        schema: ChinaSchema,
        collection: CollectionsName.China
      },
    ])
  ],
  providers: [ScheduleService, ScheduleAtOnceService, TencentNewsService, InewsService]
})

export class BaseScheduleModule { }
