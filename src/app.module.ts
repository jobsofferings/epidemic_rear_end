import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { InewsModule } from './inews/index.module';
import { EpidemicModule } from './student/epidemic.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    MongooseModule.forRoot('mongodb://134.175.103.75:27017/epidemic', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
      authSource: "admin",
      auth: {
        user: 'epidemic',
        password: '12345678',
      }
    }),
    EpidemicModule,
    InewsModule
  ],
  providers: [],
})

export class AppModule { }
