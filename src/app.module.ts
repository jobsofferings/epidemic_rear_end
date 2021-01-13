import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { InewsModule } from './inews/index.module';
import { ForeignModule } from './student/foreign.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    MongooseModule.forRoot('mongodb://134.175.103.75:27017/admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    	useCreateIndex: true,
    	useFindAndModify: true,
      authSource: "admin",
      auth: {
        user: '2821740092',
        password: 'ithinkso123'
      }
    }),
    ForeignModule,
    InewsModule
  ],
  providers: [],
})

export class AppModule { }
