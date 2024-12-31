import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentsController } from './shipment.controller';

describe('ShippmentController', () => {
  let controller: ShipmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipmentsController],
    }).compile();

    controller = module.get<ShipmentsController>(ShipmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
