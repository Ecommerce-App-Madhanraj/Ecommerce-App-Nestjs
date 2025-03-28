import { Module } from '@nestjs/common';
import { ReviewImageController } from './review-image.controller';
import { ReviewImageService } from './review-image.service';

@Module({
  controllers: [ReviewImageController],
  providers: [ReviewImageService]
})
export class ReviewImageModule {}
