/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";
import { Category } from "src/category/schemas/category.schemas";

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

    // @ApiProperty()
    // readonly category:Category[]

}