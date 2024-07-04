/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';  // Importe o PrismaModule

@Module({
  imports: [PrismaModule],  // Adicione o PrismaModule aos imports
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
