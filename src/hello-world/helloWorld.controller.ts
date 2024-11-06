import { Controller, Get } from '@nestjs/common';

@Controller('v1')
export class HelloWorldController {
  @Get('helloWorld')
  getHelloWorld(): string {
    // Acessando a variável de ambiente 'BRANCH_NAME'
    const branch = process.env.BRANCH_NAME || 'branch desconhecida'; // Valor padrão caso a variável não esteja definida

    return `Hello World! A branch atual é: ${branch}`;
  }
}