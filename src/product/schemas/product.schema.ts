/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { User } from "src/auth/schemas/user.schema";
import { Category } from "src/category/schemas/category.schemas";

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

    @Prop()    // {type:mongoose.Schema.Types.ObjectId,ref:'User'}
    user:User[];

    @Prop()
    category:Category[]
}


export const ProductSchema=SchemaFactory.createForClass(Product)