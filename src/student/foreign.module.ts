import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ForeignService } from './foreign.service';
import { ForeignSchema } from 'src/interfaces/foreign.interface';
import { ForeignController } from './foreign.controller';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Foreign', // 需要个schema名称对应, 建议大写开头
      schema: ForeignSchema, // 引入的schema
      collection: 'epidemic' // 数据库名称
    }
  ])],
  controllers: [ForeignController],
  providers: [ForeignService]
})
export class ForeignModule {}