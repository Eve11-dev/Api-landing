import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStoreDto } from './dto/create-store.dto';
import { Store} from "./entities/store.entity";
import { UpdateStoreDto } from "./dto/update-store.dto";


@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>
  ) {}

  
  async create(createStoreDto: CreateStoreDto) {
    const store = await this.storeRepository.create(createStoreDto);
    await this.storeRepository.save(store);

    return store;
  }

  findAll() {
    return this.storeRepository.find();
  }
  async findOne(id: string) {
    return await this.storeRepository.findOne({
      where: { id }
    })
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    const findStore = await this.findOne(id);
    const updateStore = await this.storeRepository.merge(
      findStore,
      updateStoreDto
    );

    return this.storeRepository.save(updateStore);
  }
  
  async remove(id: string) {
    await this.storeRepository.delete(id)

  }

  }
