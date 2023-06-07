import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateClientDto } from './dto/create-client.dto';
import { Client} from "./entities/client.entity";
import { UpdateClientDto } from "./dto/update-client.dto";


@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>
  ) {}

  
  async create(createClientDto: CreateClientDto) {
    const client = this.clientRepository.create(createClientDto);
    await this.clientRepository.save(client);

    return client;
  }

  findAll() {
    return this.clientRepository.find();
  }
  async findOne(id: string) {
    return await this.clientRepository.findOne({
      where: { id }
    })
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const findClient = await this.findOne(id);
    const updateClient = await this.clientRepository.merge(
      findClient,
      updateClientDto
    );

    return this.clientRepository.save(updateClient);
  }
  
  async remove(id: string) {
    await this.clientRepository.delete(id)

  }

  }