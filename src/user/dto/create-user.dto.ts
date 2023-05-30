import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsBoolean()
    @IsNotEmpty()
    receiveEmails: boolean;

    @IsString()
    fullName: string;

    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    lastname:string;
}
