import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { HydratedDocument } from 'mongoose';

@Schema({timestamps: true})
export class ReviewModel {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  productId: string;

  createInstance(dto: CreateReviewDto): ReviewDocument{
    const review = new ReviewModel()
    review.name = dto.name;
    review.title = dto.title;
    review.description = dto.description;
    review.rating = dto.rating;
    review.productId = dto.productId;
    return review as ReviewDocument;
  }
}

const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
ReviewSchema.loadClass(ReviewModel)
export type ReviewDocument = HydratedDocument<ReviewModel>;

