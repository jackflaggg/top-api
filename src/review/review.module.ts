import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './review';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      { schema: ReviewSchema, name: Review.name, collection: 'Review' },
    ])
  ],
  providers: [ReviewService]
})
export class ReviewModule {}

