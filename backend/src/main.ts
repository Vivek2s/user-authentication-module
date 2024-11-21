import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector)); // Apply JWT guard globally
  app.enableCors({
    origin: process.env.ALLOWED_ORIGIN, // Define the allowed domain
    methods: 'GET,POST', // Specify allowed HTTP methods
    credentials: true, // Enable if you need to support cookies
  }); // 
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
