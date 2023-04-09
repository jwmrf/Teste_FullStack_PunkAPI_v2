import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from './../../config/database/postgres/connect';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';


@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
