import { Prop, Schema } from '@nestjs/mongoose';
import { IsArray, IsOptional } from 'class-validator';

export class ProductCharacteristic {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

@Schema({timestamps: true})
export class ProductModel {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  price: string;

  @Prop({required: false})
  @IsOptional()
  oldPrice?: string;

  @Prop()
  credit: number;

  @Prop()
  calculatedRating: number;

  @Prop()
  description: string;

  @Prop()
  advantages: string;

  @Prop({required: false})
  @IsOptional()
  disAdvantages?: string;

  @Prop({ type: [String]})
  @IsArray()
  categories: string[];

  @Prop({ type: [String]})
  @IsArray()
  tags: string[];

  @Prop({ type: [ProductCharacteristic], _id: false})
  @IsArray()
  characteristics: ProductCharacteristic[]
}
