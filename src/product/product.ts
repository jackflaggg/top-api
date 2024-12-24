import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsOptional} from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

export class ProductCharacteristic {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

@Schema({timestamps: true})
export class Product {
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

  static createInstance(dto: CreateProductDto): ProductDocument {
    const product = new this();
    product.image = dto.image;
    product.title = dto.title
    product.calculatedRating = dto.initialRating;
    product.price = String(dto.price);
    product.oldPrice = String(dto.oldPrice);
    product.credit = dto.credit;
    product.description = dto.description;
    product.advantages = dto.advantages;
    product.disAdvantages = dto.disAdvantages;
    product.categories = dto.categories;
    product.tags = dto.tags;
    product.characteristics = dto.characteristics;
    return product as ProductDocument;
  }
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.loadClass(Product)

export type ProductDocument = HydratedDocument<Product>;
