import { IsNotEmpty, IsNumber, IsString, IsEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateStoreDto } from "./create-store.dto";

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsNotEmpty()
  @IsString()
  client: string;

  @IsString()
  sale_date: string;

  @IsNotEmpty()
  @IsNumber()
  quantity_product: number;
}
