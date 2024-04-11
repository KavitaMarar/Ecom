/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class User{
    @Prop({
        unique:true,
        required:true
    })
    name:string;

    @Prop({
        unique:true,
        required:true
    })
    email:string;

    @Prop({
        unique:true,
        required:true
    })
    password:string;
}

/////for checking git for a particular file

export const UserSchema=SchemaFactory.createForClass(User)