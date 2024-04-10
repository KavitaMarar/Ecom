/* eslint-disable prettier/prettier */
import { Schema } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@Schema({
    timestamps:true
})

export class LoginDto{
   
    @IsNotEmpty()
    @IsEmail({},{message:'please enter correct mail'})
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    readonly password:string;

}