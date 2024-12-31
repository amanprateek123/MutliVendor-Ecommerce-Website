import { Test, TestingModule } from '@nestjs/testing';
import { ShippmentService } from './shipment.service';

describe('ShippmentService', () => {
  let service: ShippmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShippmentService],
    }).compile();

    service = module.get<ShippmentService>(ShippmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
