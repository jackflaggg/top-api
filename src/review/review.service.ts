import { Injectable } from '@nestjs/common';
import { Review, ReviewDocument, ReviewModelType } from './review';
import { CreateReviewDto } from './dto/create-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Review.name) private readonly ReviewModel: ReviewModelType) {}
  async create(dto: CreateReviewDto) {
    return this.ReviewModel.create(dto);

  }
  async delete(id: string): Promise<ReviewDocument | null> {
    return this.ReviewModel.findByIdAndDelete(id).exec();
  }
  async findByProductId(productId: string): Promise<ReviewDocument[]> {
    return this.ReviewModel.find({productId: new mongoose.Types.ObjectId(productId)})
  }
}
