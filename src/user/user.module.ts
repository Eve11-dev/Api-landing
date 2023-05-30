import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Landing } from 'src/landing/entities/landing.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Landing ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}