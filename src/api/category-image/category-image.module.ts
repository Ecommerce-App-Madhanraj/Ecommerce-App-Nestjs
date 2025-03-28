import { Module } from '@nestjs/common';
import { CategoryImageController } from './category-image.controller';
import { CategoryImageService } from './category-image.service';

@Module({
  controllers: [CategoryImageController],
  providers: [CategoryImageService]
})
export class CategoryImageModule {}
