import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

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
  productId: mongoose.Types.ObjectId;
}
