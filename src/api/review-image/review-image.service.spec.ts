import { Test, TestingModule } from '@nestjs/testing';
import { ReviewImageService } from './review-image.service';

describe('ReviewImageService', () => {
  let service: ReviewImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewImageService],
    }).compile();

    service = module.get<ReviewImageService>(ReviewImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
