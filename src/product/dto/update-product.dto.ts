import { IsNotEmpty, IsNumber, IsString, IsEmpty } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsNotEmpty()
    @IsString()
    name_product: string;

    @IsNumber()
    @IsNotEmpty()
    price:number;

    @IsEmpty()
    quantity: number;
}