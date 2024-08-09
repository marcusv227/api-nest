/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Prisma, User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('allUsers')
  getAllUsers() {
    return this.appService.findAllUser();
  }
  @Post('createUser')
  createUser(
    @Body() userData: Prisma.UserCreateInput
  ): Promise<User> 
  {
    return this.appService.createUser(userData)
  }

}
