import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from './modules/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const configService = app.get(ConfigService)
  await app.listen(configService.get("PORT"))
}
bootstrap();
