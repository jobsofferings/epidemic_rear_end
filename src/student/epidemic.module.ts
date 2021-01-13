import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EpidemicService } from './epidemic.service';
import { EpidemicController } from './epidemic.controller';
import { EpidemicSchema } from 'src/schema/epidemic.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Epidemic', // 需要个schema名称对应, 建议大写开头
      schema: EpidemicSchema, // 引入的schema
      collection: 'epidemic' // 数据库名称
    },
  ])],
  controllers: [EpidemicController],
  providers: [EpidemicService]
})
export class EpidemicModule {}