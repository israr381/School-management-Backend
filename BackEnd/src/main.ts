import { NestFactory } from '@nestjs/core';
import { DatabasModule } from './Database.mudule';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(DatabasModule);
  app.enableCors({origin: 'http://localhost:3001',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
    allowedHeaders: 'Content-Type, Accept',  
  });
  await app.listen(5000);
}
bootstrap();
