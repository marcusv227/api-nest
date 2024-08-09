/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  
  constructor(private prismaService: PrismaService){}

  createUser(data: Prisma.UserCreateInput): Promise<User>{
    return this.prismaService.user.create({ data })
  }

  async findAllUser(): Promise<User[]>{
    return this.prismaService.user.findMany()
  }
}
