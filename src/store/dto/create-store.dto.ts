import { IsNotEmpty, IsNumber, IsString, IsEmpty } from "class-validator";
export class CreateStoreDto {
  @IsNotEmpty()
  @IsString()
  client: string;

  @IsString()
  sale_date: string;

  @IsNotEmpty()
  @IsNumber()
  quantity_product: number;
}
