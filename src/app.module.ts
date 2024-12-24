import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/top-api')
    /*MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    })*/,
    TopPageModule,
    ProductModule,
    ReviewModule,
    AuthModule],                  // зависимости
  controllers: [AppController], // контроллеры
  providers: [AppService],      // сервисы, репозитории
  exports: [],                  // экспортируемые провайдеры или ре экспорт модулей
})
export class AppModule {
}
