/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";

// export enum Category{
//     HOME='Home',
//     KITCHEN='Kitchen',
//     FASHION='Fashion',
//     OUTDOORS='Outdoors',
//     BEAUTY='Beauty'
// }


@Schema({
    timestamps:true
})


export class Product{
    @Prop()
    name:string

    @Prop()
    description:string

    @Prop()
    price:number

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'User'})
    user:User;


}


export const ProductSchema=SchemaFactory.createForClass(Product)