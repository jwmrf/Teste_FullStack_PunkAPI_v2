import { Controller, Get, Patch, Post, Body, HttpCode ,HttpStatus, Delete, Query, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { User, UserOne, UserUpdate } from './dto/user.dto';
import { Login } from './dto/login.dto';
import { ApiBearerAuth, ApiResponse, ApiTags} from '@nestjs/swagger';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
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

  @ApiBearerAuth()
  @Get(':id')
  async getUser(@Query() request: UserOne): Promise<UserEntity> {
    return this.userService.findOne(request.email);
  }

  @ApiBearerAuth()
  @Patch(':id')
  async patchUser(@Param() { email }: UserOne, @Body() post: UserUpdate): Promise<UpdateResult> {
    return this.userService.updateOne(email, post);
  }

  @ApiBearerAuth()
  @Delete()
  async delete(@Query() request: UserOne): Promise<DeleteResult> {
    return this.userService.delete(request.email);
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
