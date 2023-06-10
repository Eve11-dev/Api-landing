import { IsNotEmpty, IsNumber, IsString, IsEmpty } from "class-validator";
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name_product: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
