import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './models/users/user.controller';
import { AppService } from './app.service';
import { UserService } from './models/users/user.service';
import { DatabaseModule } from './config/database/postgres/connect';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/users/user.entity';


@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
