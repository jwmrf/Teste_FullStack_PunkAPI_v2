import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from './../../config/database/postgres/connect';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity]),
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [UserController],
  providers: [UserService,
    {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
  exports: [UserService]
})
export class UserModule {}
