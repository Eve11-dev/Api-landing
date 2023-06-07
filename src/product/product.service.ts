import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductDto } from './dto/create-product.dto';
import { Product} from "./entities/product.entity";
import { UpdateProductDto } from "./dto/update-product.dto";


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  
  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.create(createProductDto);
    await this.productRepository.save(product);

    return product;
  }

  findAll() {
    return this.productRepository.find();
  }
  async findOne(id: string) {
    return await this.productRepository.findOne({
      where: { id }
    })
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const findProduct = await this.findOne(id);
    const updateProduct = await this.productRepository.merge(
      findProduct,
      updateProductDto
    );

    return this.productRepository.save(updateProduct);
  }
  
  async remove(id: string) {
    await this.productRepository.delete(id)

  }

  }

