/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class Category{
    @Prop()
    category_name:string
    
    @Prop()
    category_id:string
}

export const CategorySchema=SchemaFactory.createForClass(Category)