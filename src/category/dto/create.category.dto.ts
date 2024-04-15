/* eslint-disable prettier/prettier */
import {  IsNotEmpty, IsNumber, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateCategoryDto{
   // @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly category_name:string;
    
 //   @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly category_id:string;
}