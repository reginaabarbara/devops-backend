import { Controller, Get } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

@Controller('v1')
export class HelloWorldController {
  @Get('helloworld')
  getHelloWorld(): string {
  
    const mode = process.env.MODE || 'branch desconhecida'; 
    console.log('Variável mode :', process.env.mode);
    return `Hello World! A branch atual é : ${mode}`;
  }
}