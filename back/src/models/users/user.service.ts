import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, DeleteResult, UpdateResult } from 'typeorm';
import { User, UserUpdate } from './dto/user.dto';
import { hashSync, compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
const saltRounds = 10;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    private jwtService: JwtService
  ) {}

  async find(): Promise<UserEntity[]> {
    return await this.userRepository.find({ where: { status: true }});
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete({ email: id });
  }
  
  async findOne(id: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { email: id, status: true }});
  }

  async updateOne(email: string, data: UserUpdate): Promise<UpdateResult> {
    return this.userRepository.update
    ({ email: email }, data);
  }

  async create(data: User): Promise<InsertResult> {
    data.password = await hashSync(data.password, saltRounds);
    let created = await this.userRepository.insert(data)
    return created
  }

  async signIn(email: string, pass: string) {
    const user = await this.findOne(email);
    let passwordCorrect = compareSync(pass, user.password)
    if (!passwordCorrect) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

}
