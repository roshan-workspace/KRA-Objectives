import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServiceModuleService } from './service_module/service_module.service';
import { ServiceModuleController } from './service_module/service_module.controller';
import { ServiceModuleModule } from './service_module/service_module.module';

@Module({
   imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.local.env',
          //  envFilePath:".prod.env"
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        entities:[__dirname + '/**/*.entity{.ts,.js}']
      }),
      inject: [ConfigService],
    }),
    UserModule,
     ServiceModuleModule,
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
