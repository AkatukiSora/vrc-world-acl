import { NestFactory } from '@nestjs/core';
import { ManageApiModule } from './manage-api.module';

async function bootstrap() {
  const app = await NestFactory.create(ManageApiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
