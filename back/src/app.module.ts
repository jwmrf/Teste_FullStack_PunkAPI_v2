import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/postgres/connect';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './models/users/user.module';
import { BeerModule } from './models/beers/beer.module';


@Module({
  imports: [UserModule, BeerModule, DatabaseModule],
  controllers: [],
  providers: [JwtService],
})
export class AppModule {}
