import { Controller, Get, Post, Body, HttpCode ,HttpStatus, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { User } from './dto/user.dto';
import { Login } from './dto/login.dto';
import { ApiBearerAuth, ApiResponse, ApiTags} from '@nestjs/swagger';
import { InsertResult } from 'typeorm';
import { Public } from './decorators/public.decorator';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}
  
  @ApiBearerAuth()
  @Get()
  async getAll(): Promise<UserEntity[]> {
    return this.userService.find();
  }

  @Public()
  @Post()
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async register(@Body() userDto: User): Promise<InsertResult> {
    return await this.userService.create(userDto)
  }
  
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async login(@Body() loginDto: Login): Promise<any> {
    return this.userService.signIn(loginDto.email, loginDto.password);
  }

}
