import { Controller, Get } from '@nestjs/common';

@Controller('v1')
export class HelloWorldController {
  @Get('helloWorld')
  getHelloWorld(): string {
    return 'Hello World';
  }
}