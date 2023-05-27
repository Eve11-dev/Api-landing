import {Controller,Get,Post,Body,Patch,Param,Delete,ParseUUIDPipe,} from "@nestjs/common";
import { LandingService } from "./landing.service";
import { CreateLandingDto } from "./dto/create-landing.dto";

@Controller("landing")
export class LandingController {
  constructor(private readonly landingService: LandingService) {}

  @Post()
  create(@Body() landingDto: CreateLandingDto) {
    return this.landingService.create(landingDto);
  }

  @Get()
  findAll() {
    return this.landingService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.landingService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.landingService.remove(id);
  }

  @Patch(":id")
  updateLanding(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreateLandingDto
  ) {
    //const updatedLanding = await this.shopServiceRepo.update(id, changeDto);
    return this.landingService.update(id, changeDto);
  }
}
