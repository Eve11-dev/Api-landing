import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LandingService } from './landing.service';
import { CreateLandingDto } from './dto/create-landing.dto';
import { UpdateLandingDto } from './dto/update-landing.dto';

@Controller('landing')
export class LandingController {
  constructor(private readonly landingService: LandingService) {}

  @Post()
  create(@Body() createLandingDto: CreateLandingDto) {
    return this.landingService.create(createLandingDto);
  }

  @Get()
  findAll() {
    return this.landingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLandingDto: UpdateLandingDto) {
    return this.landingService.update(+id, updateLandingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landingService.remove(+id);
  }
}
