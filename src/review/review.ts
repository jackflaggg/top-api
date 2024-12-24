import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { HydratedDocument, Model } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({timestamps: true})
export class Review {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  productId: mongoose.Types.ObjectId;

  createInstance(dto: CreateReviewDto): ReviewDocument {
    const review = new Review()
    review.name = dto.name;
    review.title = dto.title;
    review.description = dto.description;
    review.rating = dto.rating;
    review.productId = new mongoose.Types.ObjectId(dto.productId);
    return review as ReviewDocument;
  }
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
ReviewSchema.loadClass(Review)

export type ReviewDocument = HydratedDocument<Review>;

export type ReviewModelType = Model<ReviewDocument> & typeof Review

