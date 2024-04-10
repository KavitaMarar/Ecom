/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "../../auth/schemas/user.schema";

export class CreateProductDto{

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