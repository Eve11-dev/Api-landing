import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLandingDto } from './dto/create-landing.dto';
import { UpdateLandingDto } from './dto/update-landing.dto';
import { Landing } from './entities/landing.entity';

@Injectable()
export class LandingService {

  constructor(
    @InjectRepository (Landing)
    private landingRepository: Repository<Landing>
  ) { }

  create(createLandingDto: CreateLandingDto) {
    return 'This action adds a new landing';
  }

  findAll() {
    return `This action returns all landing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} landing`;
  }

  update(id: number, updateLandingDto: UpdateLandingDto) {
    return `This action updates a #${id} landing`;
  }

  remove(id: number) {
    return `This action removes a #${id} landing`;
  }
}
