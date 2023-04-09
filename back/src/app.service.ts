import { Injectable } from '@nestjs/common';
import { UserEntity } from './models/users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find({ where: { status: true }});
  }

  getHello(): string {
    return 'Hello World!';
  }
}
