import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateLandingDto } from './dto/create-landing.dto';
import { Landing} from "./entities/landing.entity";
import { UpdateLandingDto } from "./dto/update-landing.dto";
//import slugify from "slugify";


@Injectable()
export class LandingService {
  constructor(
    @InjectRepository(Landing)
    private readonly landingRepository: Repository<Landing>
  ) {}

  //Metodo para la creacion de una  nueva 
  async create(createLandingDto: CreateLandingDto) {
    const landing = await this.landingRepository.create(createLandingDto);
    await this.landingRepository.save(landing);

    return landing;
  }

  findAll() {
    return this.landingRepository.find();
  }
  async findOne(id: string) {
    return await this.landingRepository.findOne({
      where: { id }
    })
  }
  // findOne(id: string) {
  //   return this.landingRepository.findOneBy({ id:1 });
  // }

  async update(id: string, updateLandingDto: UpdateLandingDto) {
    const findLanding = await this.findOne(id);
    const updateLanding = await this.landingRepository.merge(
      findLanding,
      updateLandingDto
    );

    return this.landingRepository.save(updateLanding);
  }
  
  async remove(id: string) {
    await this.landingRepository.delete(id)
    // const landing = await this.findOne(id);
    // await this.landingRepository.remove(landing);
    // return `landing page removed`;
  }

  }

