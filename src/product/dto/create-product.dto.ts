/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "../../auth/schemas/user.schema";
import { Category } from "src/category/schemas/category.schemas";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name:string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly description:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly price:number;

    @ApiProperty()
    @IsEmpty({message:'You cannot pass user id'})
    readonly user:User

    @ApiProperty()
    readonly category:Category[]

}