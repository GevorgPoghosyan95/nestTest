import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('backend')
      .setDescription('rest api docs')
      .setVersion('1.0.0')
      .addTag('ulb')
      .build()
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('/api/docs',app,document)
  //app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT,()=>console.log(`Server running ${process.env.PORT}`));
}
bootstrap();
