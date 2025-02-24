import { Test, TestingModule } from '@nestjs/testing';
import { OrdersBillingsService } from './orders-billings.service';

describe('OrdersBillingsService', () => {
  let service: OrdersBillingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersBillingsService],
    }).compile();

    service = module.get<OrdersBillingsService>(OrdersBillingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
