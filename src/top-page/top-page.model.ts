import { Prop, Schema } from '@nestjs/mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}

export class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;

  @Prop()
  updatedAt: Date;
}

export class TopPageAdvantage {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

// @index({ '$**': 'text' })
@Schema({timestamps: true})
export class TopPageModel {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  metaTitle: string;

  @Prop()
  metaDescription: string;

  @Prop()
  category: string;

  @Prop({ type: () => HhData })
  hh?: HhData;

  @Prop({ type: () => [TopPageAdvantage] })
  advantages?: TopPageAdvantage[];

  @Prop()
  seoText?: string;

  @Prop()
  tagsTitle: string;

  @Prop({ type: () => [String] })
  tags: string[];
}

