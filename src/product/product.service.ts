/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import * as mongoose from 'mongoose';
import { User } from '../auth/schemas/user.schema';


@Injectable()
export class ProductService
 { 
    constructor
    (
        @InjectModel(Product.name)
        private productModel:mongoose.Model<Product>
    ){}
 
    async findAll():Promise<Product[]>{
        const products=await this.productModel.find();
        return products;
    }
    
    async create(product:Product,user:User):Promise<Product>
    {
        const data=Object.assign(product,user)
       const res=await this.productModel.create(product);
       return res
    } 

    async findById(id:string):Promise<Product>
    {
        const product=await this.productModel.findById(id);
        if(!product){
            throw new NotFoundException('Product not found');
        }
        return product
   }

   async UpdateById(id:string, product:Product):Promise<Product>
   {
       return await this.productModel.findByIdAndUpdate(id,product,{
        new:true,
        runValidators:true,
       });    
  }

  async deleteById(id:string):Promise<Product>
   {
       return await this.productModel.findByIdAndDelete(id)
  }
}
