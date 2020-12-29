import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { InewsModule } from './inews/index.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    InewsModule
  ],
  providers: [],
})

export class AppModule { }
