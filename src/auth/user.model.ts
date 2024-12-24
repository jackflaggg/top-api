import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true})
  passwordHash: string;

  static createInstance(dto: AuthDto): UserDocument {
    //userDocument!
    const user = new this(); //UserModel!
    user.email = dto.login;
    user.passwordHash = dto.password;

    return user as UserDocument;
  }
}

// определяем структуру документа
export const UserSchema = SchemaFactory.createForClass(User);
// связывание класса User со схемой (загружаются методы)
UserSchema.loadClass(User);

export type UserDocument = HydratedDocument<User>;
// @ts-ignore
export type UserModelType = Model<UserDocument> & typeof User