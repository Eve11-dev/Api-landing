import { IsNotEmpty, IsNumber, IsString, IsEmpty} from "class-validator";
export class CreateStoreDto {

    @IsNotEmpty()
    @IsString()
    client: string;

    @IsNotEmpty()
    @IsString()
    sale_date: string;

    @IsNotEmpty()
    @IsString()
    IDproduct: string;

    @IsEmpty()
    quantity_product: number;
} 