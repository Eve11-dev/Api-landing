import { IsNotEmpty, IsNumber, IsString, IsEmpty} from "class-validator";
export class CreateClientDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsString()
    address: string;
} 
