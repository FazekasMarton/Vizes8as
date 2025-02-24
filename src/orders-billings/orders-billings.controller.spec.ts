import { Test, TestingModule } from '@nestjs/testing';
import { OrdersBillingsController } from './orders-billings.controller';

describe('OrdersBillingsController', () => {
  let controller: OrdersBillingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersBillingsController],
    }).compile();

    controller = module.get<OrdersBillingsController>(OrdersBillingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
