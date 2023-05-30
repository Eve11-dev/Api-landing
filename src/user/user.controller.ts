import {Controller,Get,Post,Body,Patch,Param,Delete,ParseUUIDPipe,} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.userService.remove(id);
  }

  @Patch(":id")
  updateUser(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreateUserDto
  ) {
  
    return this.userService.update(id, changeDto);
  }
}
