import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateLandingDto } from "./dto/create-landing.dto";
import { Landing} from "./entities/landing.entity";
//import slugify from "slugify";

@Injectable()
export class LandingService {
  constructor(
    @InjectRepository(Landing)
    private landingRepository: Repository<Landing>
  ) {}

  //Metodo para la creacion de una  nueva categoria
  async create(catDto: CreateLandingDto) {
    const landing = this.landingRepository.create(catDto);
    await this.landingRepository.save(landing);

    return landing;
  }

  findAll() {
    return this.landingRepository.find();
  }

  findOne(id: string) {
    return this.landingRepository.findOneBy({ id:1 });
  }

  async remove(id: string) {
    const landing = await this.findOne(id);
    await this.landingRepository.remove(landing);
    return `landing page removed`;
  }

  async update(id: string, changeDto: CreateLandingDto) {
    const findLanding = await this.findOne(id);
    const updateLanding = await this.landingRepository.merge(
      findLanding,
      changeDto
    );

    return this.landingRepository.save(updateLanding);
  }
}
