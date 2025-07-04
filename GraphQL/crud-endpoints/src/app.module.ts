import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { BookModule } from './Book/book.module';

@Module({
  imports: [GraphQLModule.forRoot({
    driver:ApolloDriver,
    playground:true,
    autoSchemaFile:join(process.cwd(), "src/schema.graphql"),
    definitions:{
      path:join(process.cwd(),"src/graphql.ts")
    }

  }), BookModule],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
