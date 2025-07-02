import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entities/person.entity';
import { GetPersonsHandler } from './queries/handler/get-persons.handler';
import { CreatePersonsHandler } from './commands/handler/create-person.handler';
import { GetPersonByIdHandler } from './queries/handler/get-personById.handler';
import { UpdatePersonByIdHandler } from './commands/handler/update-person.handler';
import { DeletePersonsHandler } from './commands/handler/delete-person.handler';

@Module({
  imports: [CqrsModule,
    TypeOrmModule.forFeature([Person])
  ],
  controllers: [PersonController],
  providers:[GetPersonsHandler,CreatePersonsHandler
    , GetPersonByIdHandler, UpdatePersonByIdHandler, DeletePersonsHandler]
})
export class PersonModule {}
