import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateTopPageDto } from './dto/create-top-page.dto';

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

  createInstance(dto: CreateTopPageDto){
    const page = new TopPageModel();
    page.firstCategory = dto.firstCategory;
    page.secondCategory = dto.secondCategory;
    page.alias = dto.alias;
    page.title = dto.title;
    page.metaTitle = dto.metaTitle
    page.metaDescription = dto.metaDescription
    page.category = dto.category;
    page.hh = dto.hh;
    page.advantages = dto.advantages;
    page.seoText = dto.seoText;
    page.tagsTitle = dto.tagsTitle;
    page.tags = dto.tags;
    return page as TopPageDocument;
  }
}

const TopPageModelSchema = SchemaFactory.createForClass(TopPageModel);
TopPageModelSchema.loadClass(TopPageModel);
TopPageModelSchema.index({ '$**': 'text' })

export type TopPageDocument = HydratedDocument<TopPageModel>;


