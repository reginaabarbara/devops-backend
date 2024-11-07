import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorldController } from './hello-world/helloWorld.controller';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,})],
  controllers: [AppController, HelloWorldController],
  providers: [AppService],
})
export class AppModule {}
