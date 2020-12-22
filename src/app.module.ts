import { Module } from '@nestjs/common';
import { CityModule } from './city/index.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    CityModule
  ],
  providers: [],
})

export class AppModule { }
