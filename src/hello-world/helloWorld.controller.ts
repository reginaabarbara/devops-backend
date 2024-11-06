import { Controller, Get } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

@Controller('v1')
export class HelloWorldController {
  @Get('helloWorld')
  getHelloWorld(): string {
    // Acessando a variável de ambiente 'BRANCH_NAME'
    const mode = process.env.MODE || 'branch desconhecida'; // Valor padrão caso a variável não esteja definida
    console.log('Variável mode :', process.env.mode);
    return `Hello World! A branch atual é : `;
  }
}