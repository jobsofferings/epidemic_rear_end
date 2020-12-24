import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ForeignModule } from './foreign/index.module';
import { GlobalModule } from './global/index.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    ForeignModule,
    GlobalModule
  ],
  providers: [],
})

export class AppModule { }
