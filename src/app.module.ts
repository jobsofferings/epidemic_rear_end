import { Module } from '@nestjs/common';
import { CountryModule } from './country/country.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [CountryModule],
  providers: [UsersService],
})
export class AppModule {}
