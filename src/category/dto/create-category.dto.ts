import { IsNotEmpty, IsNumber, IsString, IsEmpty} from "class-validator";
export class CreateCategoryDto {

    @IsNotEmpty()
    @IsString()
     descriptionProduct: string;
 
} 
