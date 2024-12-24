import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Product } from './product';
import { FindProductDto } from './dto/find-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: CreateProductDto){

  }
  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: Product){

  }

  @HttpCode(HttpStatus.OK)
  @Post('find')
  async find(@Body() dto: FindProductDto) {

  }
}
