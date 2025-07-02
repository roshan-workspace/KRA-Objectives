import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPersonsQuery } from './queries/impl/get-persons.query';
import { CreatePersonsCommand } from './commands/impl/create-person.command';
import { CreatePersonDto } from './dto/create-person.dto';
import { GetPersonByIdQuery } from './queries/impl/get-personById.query';
import { UpdatePersonByIdHandler } from './commands/handler/update-person.handler';
import { UpdatePersonDto } from './dto/update-person.dto';
import { UpdatePersonCommand } from './commands/impl/update-person.command';
import { DeletePersonCommand } from './commands/impl/delete-person.command';

@Controller('person')
export class PersonController {

    constructor(private queryBus:QueryBus, private commandBus: CommandBus){}

    @Get('all')
    async getAllPerson(){
        return await this.queryBus.execute(new GetPersonsQuery())
    }

    @Get(":id")
    async getPersonById(@Param("id") id:number){
        return await this.queryBus.execute(new GetPersonByIdQuery(id))
    }


    @Post("add")
    @UsePipes(new ValidationPipe({transform:true}))
    async addPerson(@Body() dto:CreatePersonsCommand){ 
        return await this.commandBus.execute(new CreatePersonsCommand(dto.name, dto.age))
    }


    @Patch(":id")
    async updatePerson(@Param("id") id:number, @Body() dto:UpdatePersonDto){
        return await this.commandBus.execute(new UpdatePersonCommand(id, dto ))
    }


    @Delete(":id")
    async remove(@Param('id') id:number ){
        return await this.commandBus.execute(new DeletePersonCommand(id))
    }
}
