import { NestFactory } from '@nestjs/core';
import { DatabasModule } from './Database.mudule';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as serverless from 'serverless-http';

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(DatabasModule, new ExpressAdapter(expressApp));
  app.enableCors({
    origin: ['http://localhost:3001', 'https://school-management-backend-livid.vercel.app'],
    credentials: true,
  });
  await app.init();

  return serverless(expressApp);
}

export const handler = bootstrap();
