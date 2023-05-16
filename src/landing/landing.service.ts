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

  async create(createProductDto: CreateLandingDto) {
    const model = this.landingRepository.create(createProductDto)
      await this.landingRepository.save(model);

      console.log(model);

    return model;
  }

  findAll() {
    return this.landingRepository.find();
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
