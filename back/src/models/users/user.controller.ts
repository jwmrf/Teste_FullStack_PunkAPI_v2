import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { User } from './user.dto';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { InsertResult } from 'typeorm';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async index(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }
  
  @Post()
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() userDto: User): Promise<InsertResult> {
    console.log(userDto)
    return this.userService.create(userDto)
  }

}
