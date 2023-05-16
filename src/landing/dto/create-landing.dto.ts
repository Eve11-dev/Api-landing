import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
export class CreateLandingDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
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
    @MinLength(10)
    category: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    price: number;
}
