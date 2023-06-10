import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from "@nestjs/common";
import { StoreService } from "./store.service";
import { CreateStoreDto } from "./dto/create-store.dto";

@Controller("stores")
export class StoreController {
  constructor(private readonly StoreService: StoreService) {}

  @Post()
  create(@Body() StoreDto: CreateStoreDto) {
    return this.StoreService.create(StoreDto);
  }

  @Get()
  findAll() {
    return this.StoreService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.StoreService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.StoreService.remove(id);
  }

  @Patch(":id")
  updateStore(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreateStoreDto
  ) {
    //const updatedLanding = await this.shopServiceRepo.update(id, changeDto);
    return this.StoreService.update(id, changeDto);
  }
}
