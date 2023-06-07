import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category} from "./entities/category.entity";
import { UpdateCategoryDto } from "./dto/update-category.dto";


@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  
  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(category);

    return category;
  }

  findAll() {
    return this.categoryRepository.find();
  }
  async findOne(id: string) {
    return await this.categoryRepository.findOne({
      where: { id }
    })
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const findCategory = await this.findOne(id);
    const updateCategory = await this.categoryRepository.merge(
      findCategory,
      updateCategoryDto
    );

    return this.categoryRepository.save(updateCategory);
  }
  
  async remove(id: string) {
    await this.categoryRepository.delete(id)

  }

  }

