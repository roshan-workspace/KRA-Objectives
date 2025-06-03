import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal:true,
    envFilePath: "src/.local.env",
  }), UserModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
