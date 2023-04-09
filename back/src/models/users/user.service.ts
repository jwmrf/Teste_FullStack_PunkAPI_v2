import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { User } from './user.dto';
import {hashSync} from 'bcrypt';
const saltRounds = 10;

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find({ where: { status: true }});
  }

  async create(data: User): Promise<InsertResult> {
    data.password = await hashSync(data.password, saltRounds);
    let created = await this.userRepository.insert(data)
    return created
  }

}
