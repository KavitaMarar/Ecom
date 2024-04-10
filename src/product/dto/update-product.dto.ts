/* eslint-disable prettier/prettier */
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";

/* eslint-disable prettier/prettier */
export class UpdateProductDto{
    @IsNotEmpty()
    @IsString()
    readonly name:string;
    
    @IsNotEmpty()
    @IsString()
    readonly description:string;

    @IsNotEmpty()
    @IsNumber()
    readonly price:number;

    @IsEmpty({message:'You cannot pass user id'})
    readonly user:User
}