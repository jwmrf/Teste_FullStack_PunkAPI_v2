import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserEntity } from './models/users/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async index(): Promise<UserEntity[]> {
    return this.appService.findAll();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
