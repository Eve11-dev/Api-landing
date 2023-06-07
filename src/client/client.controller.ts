import {Controller,Get,Post,Body,Patch,Param,Delete,ParseUUIDPipe,} from "@nestjs/common";
import { ClientService } from "./client.service";
import { CreateClientDto } from "./dto/create-client.dto";

@Controller("client")
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}

  @Post()
  create(@Body() ClientDto: CreateClientDto) {
    return this.ClientService.create(ClientDto);
  }

  @Get()
  findAll() {
    return this.ClientService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ClientService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.ClientService.remove(id);
  }

  @Patch(":id")
  updateClient(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreateClientDto
  ) {
    //const updatedLanding = await this.shopServiceRepo.update(id, changeDto);
    return this.ClientService.update(id, changeDto);
  }
}
