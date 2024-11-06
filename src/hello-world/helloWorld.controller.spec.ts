import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldController } from './helloWorld.controller';

describe('HelloWorldController', () => {
  let controller: HelloWorldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
    }).compile();

    controller = module.get<HelloWorldController>(HelloWorldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
