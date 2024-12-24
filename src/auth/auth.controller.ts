import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(@Body() dto: AuthDto){

  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() dto: AuthDto){

  }
}
