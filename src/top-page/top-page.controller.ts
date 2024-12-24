import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('top-page')
export class TopPageController {
  constructor() {
  }
  @Post('create')
  async create(@Body() dto: CreateTopPageDto){

  }
  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Get('byAlias/:alias')
  async getByAlias(@Param('alias') alias: string) {
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CreateTopPageDto){

  }

  @HttpCode(HttpStatus.OK)
  @Post('find')
  async find(@Body() dto: FindTopPageDto) {

  }
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleCron(){

  }
}
