import { Injectable } from "@nestjs/common";
import { InjectRepository,  } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { CreateUserDto } from './dto/create-user.dto';
import { User} from "./entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    await this.userRepository.save(user);

    return user;
  }

  findAll() {
    return this.userRepository.find();
  }
  async findOne(id: string) {
    return await this.userRepository.findOne({
      where: { id }
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.findOne(id);
    const updateUser = await this.userRepository.merge(
      findUser,
      updateUserDto
    );

    return this.userRepository.save(updateUser);
  }
  
  async remove(id: string) {
    await this.userRepository.delete(id)
 
  }

  }
  
