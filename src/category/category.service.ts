/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './schemas/category.schemas';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name)
        private categoryModel:mongoose.Model<Category>
    )
    {}

    async findAll():Promise<Category[]>{
        const categorys=await this.categoryModel.find();
        return categorys;
    }

    async create(category:Category):Promise<Category>
    {
        const data=Object.assign(category)
       const res=await this.categoryModel.create(category);
       return res
    } 

    async findById(id:string):Promise<Category>
    {
        const category=await this.categoryModel.findById(id);
        if(!category)
        {
            throw new NotFoundException('Category not found');
        }
        return category
   }

   async UpdateById(id:string, category:Category):Promise<Category>
   {
       return await this.categoryModel.findByIdAndUpdate(id,category,{
        new:true,
        runValidators:true,
       });    
    }

    async deleteById(id:string):Promise<Category>
    {
        return await this.categoryModel.findByIdAndDelete(id)
   }
}

