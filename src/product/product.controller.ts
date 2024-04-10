/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller,Delete,Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@Controller('product')
@ApiBearerAuth()
@ApiTags('auth')
export class ProductController {
    constructor(private productService:ProductService){}

    @Get()
    async getAllProducts():Promise<Product[]>{
        return this.productService.findAll()
    }

    @Post()
    @UseGuards(AuthGuard())
    async createProduct(
        @Body()
        product:CreateProductDto,
        @Req() req
    ):Promise<Product>{

        return this.productService.create(product,req.user);
    }

    @Get(':id')
    async getProduct(@Param ('id') id:string):Promise<Product>{
        return this.productService.findById(id)
    }

    @Put(':id')
    async updateProduct(
        @Param('id') id:string,
        @Body()
        product:UpdateProductDto
    ):Promise<Product>{
        return this.productService.UpdateById(id,product);
    }

    @Delete(':id')
    async deleteProduct(@Param ('id') id:string):Promise<Product>{
        return this.productService.deleteById(id)
    }
}
