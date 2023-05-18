import { Module } from '@nestjs/common';
import { LandingService } from './landing.service';
import { LandingController } from './landing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Landing } from './entities/landing.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Landing])
  ],
  controllers: [LandingController],
  providers: [LandingService]
})
export class LandingModule {}
