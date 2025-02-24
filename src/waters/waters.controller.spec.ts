import { Test, TestingModule } from '@nestjs/testing';
import { WatersController } from './waters.controller';

describe('WatersController', () => {
  let controller: WatersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatersController],
    }).compile();

    controller = module.get<WatersController>(WatersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
