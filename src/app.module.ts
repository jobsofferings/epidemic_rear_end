import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ScheduleModule } from 'nest-schedule';
import { DB_USER } from './config/user';
import { InewsModule } from './inews/index.module';
import { BaseScheduleModule } from './schedule/schedule.module';
import { EpidemicModule } from './student/epidemic.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    ScheduleModule.register(),
    BaseScheduleModule,
    MongooseModule.forRoot('mongodb://134.175.103.75:27017/epidemic', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
      authSource: "admin",
      auth: DB_USER
    }),
    EpidemicModule,
    InewsModule
  ],
  providers: [],
})

export class AppModule { }
