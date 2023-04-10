import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './models/users/user.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/postgres/connect';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './models/users/user.module';


@Module({
  imports: [UserModule, DatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [AppController, UserController],
  providers: [AppService, JwtService],
})
export class AppModule {}
