import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateLandingDto } from "./create-landing.dto";

export class UpdateLandingDto extends PartialType(CreateLandingDto) {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  url: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(20)
  descriptionProduct: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
