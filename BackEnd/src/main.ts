import { NestFactory } from '@nestjs/core';
import { DatabasModule } from './Database.mudule';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(DatabasModule);
  app.use(cookieParser())
  app.enableCors({origin: 'http://localhost:3000',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
    allowedHeaders: 'Content-Type, Accept', 
    credentials : true 
  });
  await app.listen(5000);
}
bootstrap();
