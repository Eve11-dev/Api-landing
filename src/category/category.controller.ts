import {Controller,Get,Post,Body,Patch,Param,Delete,ParseUUIDPipe,} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller("category")
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Post()
  create(@Body() CategoryDto: CreateCategoryDto) {
    return this.CategoryService.create(CategoryDto);
  }

  @Get()
  findAll() {
    return this.CategoryService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.CategoryService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.CategoryService.remove(id);
  }

  @Patch(":id")
  updateCategory(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreateCategoryDto
  ) {
    //const updatedLanding = await this.shopServiceRepo.update(id, changeDto);
    return this.CategoryService.update(id, changeDto);
  }
}
