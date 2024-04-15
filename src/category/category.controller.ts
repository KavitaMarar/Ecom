/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post ,Delete, Patch} from '@nestjs/common';
import { Category } from './schemas/category.schemas';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create.category.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('category')
export class CategoryController {
    constructor (private categoryService: CategoryService){}
    
    @Get()
    async getAllCategory():Promise<Category[]>
    {
       return this.categoryService.findAll()
    }

    @Post()
    async createCategory( @Body () category:CreateCategoryDto):Promise<Category>
    {
        return this.categoryService.create(category);
    }

    @Get(':id')
    async getCategory(@Param ('id') id:string):Promise<Category>
    {
        return this.categoryService.findById(id);
    }
    
    @Patch(':id')
    async updateProduct(
        @Param('id') id:string,
        @Body()
        product:CreateCategoryDto
    ):Promise<Category>{
        return this.categoryService.UpdateById(id,product);
    }

    @Delete(':id')
    async deleteProduct(@Param ('id') id:string):Promise<Category>{
        return this.categoryService.deleteById(id)
    }

    @Get('product/:id')
    async showDetails(@Param('id')id:string):Promise<Category>
    {
        return this.categoryService.findById(id);
    }
}
 