import { Test, TestingModule } from '@nestjs/testing';
import { ReviewImageController } from './review-image.controller';

describe('ReviewImageController', () => {
  let controller: ReviewImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewImageController],
    }).compile();

    controller = module.get<ReviewImageController>(ReviewImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
