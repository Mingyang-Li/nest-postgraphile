import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const DATABASE_URL = configService.get('DATABASE_URL');
  console.log(`DATABASE_URL: ${DATABASE_URL}`);
  await app.listen(3000);
};

bootstrap();
