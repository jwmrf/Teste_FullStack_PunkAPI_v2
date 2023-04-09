import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../../models/users/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'arkantos',
    database: 'postgres',
    entities: [UserEntity],
    synchronize: true
  }),]
})
export class DatabaseModule {}