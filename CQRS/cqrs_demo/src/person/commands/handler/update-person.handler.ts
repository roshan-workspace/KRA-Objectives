import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Person } from "src/entities/person.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdatePersonCommand } from "../impl/update-person.command";
import { NotFoundException } from "@nestjs/common";

@CommandHandler(UpdatePersonCommand)
export class UpdatePersonByIdHandler implements ICommandHandler<UpdatePersonCommand>{

    constructor(@InjectRepository(Person) private personRepo: Repository<Person>){}

    async execute(command: UpdatePersonCommand): Promise<Person | null> {
        const person = this.personRepo.findOneBy({id:command.id})

        if(!person) throw new NotFoundException(`Person with the id${command.id} Does not exists`)

         await this.personRepo.update(command.id, command.data)
         return this.personRepo.findOneBy({id:command.id})
    }
}