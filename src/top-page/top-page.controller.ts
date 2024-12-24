import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from '../product/product.model';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  constructor() {
  }
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>){

  }
  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel){

  }

  @HttpCode(HttpStatus.OK)
  @Post()
  async find(@Body() dto: FindTopPageDto) {

  }
}
