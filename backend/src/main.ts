import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORSの設定を追加
  app.enableCors({
    origin: true, // 開発環境では全てのオリジンを許可
    credentials: true,
  });

  // バリデーションパイプの設定
  app.useGlobalPipes(new ValidationPipe());

  // Swagger設定
  const config = new DocumentBuilder()
    .setTitle('Book Content Memo API')
    .setDescription('書籍内容メモアプリケーションのAPI仕様書')
    .setVersion('1.0')
    .addTag('認証')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
