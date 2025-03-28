import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductsService } from './seller-products.service';

describe('SellerProductsService', () => {
  let service: SellerProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerProductsService],
    }).compile();

    service = module.get<SellerProductsService>(SellerProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
