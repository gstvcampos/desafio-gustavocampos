import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const config = new DocumentBuilder()
    .setTitle('Resultados APP')
    .setDescription('API para listar notas por bimestre')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  await app.listen(3000)
}
bootstrap()
