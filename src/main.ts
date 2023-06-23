import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //通常、Reactが3000を使う
  await app.listen(3333);
}
bootstrap();
