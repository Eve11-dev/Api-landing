import {Controller,Get,Post,Body,Patch,Param,Delete,ParseUUIDPipe,} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller("product")
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Post()
  create(@Body() ProductDto: CreateProductDto) {
    return this.ProductService.create(ProductDto);
  }

  @Get()
  findAll() {
    return this.ProductService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ProductService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.ProductService.remove(id);
  }

  @Patch(":id")
  updateProduct(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreateProductDto
  ) {
    //const updatedLanding = await this.shopServiceRepo.update(id, changeDto);
    return this.ProductService.update(id, changeDto);
  }
}

