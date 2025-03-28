import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductsController } from './seller-products.controller';

describe('SellerProductsController', () => {
  let controller: SellerProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerProductsController],
    }).compile();

    controller = module.get<SellerProductsController>(SellerProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
