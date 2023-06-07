import { IsNotEmpty, IsNumber, IsString, IsEmpty } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    
    @IsNotEmpty()
    @IsString()
     descriptionProduct: string;
}