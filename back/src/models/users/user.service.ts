import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { User } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find({ where: { status: true }});
  }

  async create(data: User): Promise<InsertResult> {
     //this.userRepository.create(data)
    let created = await this.userRepository.insert(data)
    console.log(created)
    return created
  }

}
