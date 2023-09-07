import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { ValidateCategoryOwnerShipService } from './validate-category.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ValidateCategoryOwnerShipService],
  exports: [ValidateCategoryOwnerShipService],
})
export class CategoriesModule {}
