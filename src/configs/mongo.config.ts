import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (configService: ConfigService): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions()
  }
}

const getMongoString = (configService: ConfigService) => {

  const mongoLogin = configService.get('MONGO_LOGIN');

  const mongoPassword = configService.get('MONGO_PASSWORD');

  const db = configService.get('MONGO_AUTH_DB');

  const host = configService.get('MONGO_HOST');

  const port = configService.get('MONGO_PORT');

  return `mongodb://${mongoLogin}:${mongoPassword}@${host}:${port}/${db}`;

};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
})