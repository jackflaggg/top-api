import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.model';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      { schema: UserSchema, name: User.name, collection: 'User' },
    ])
  ]
})
export class AuthModule {}
