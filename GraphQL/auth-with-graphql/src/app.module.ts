import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppResolver } from './app.resolver';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule,GraphQLModule.forRoot({
    driver:ApolloDriver,
    playground:true,
    autoSchemaFile:join(process.cwd(), "src/schema.graphql"),
    sortSchema:true,
    definitions:{
      path:join(process.cwd(), "src/graphql.ts")
    }
  }),

 TypeOrmModule.forRoot({
  type:"postgres",
  host:"localhost",
  port:5432,
  username:"postgres",
  password:"12345",
  database:"BookDB", 
  entities:[__dirname+'/**/*.entity{.ts,.js}'],
  synchronize:true,
})
],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
