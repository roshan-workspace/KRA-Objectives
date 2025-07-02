import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Person } from "src/entities/person.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePersonsCommand } from "../impl/create-person.command";

@CommandHandler(CreatePersonsCommand)
export class CreatePersonsHandler implements ICommandHandler<CreatePersonsCommand>{

    constructor(@InjectRepository(Person) private personRepo: Repository<Person>){}

    async execute(command: CreatePersonsCommand): Promise<Person> {
        const newPerson = this.personRepo.create({name:command.name, age:command.age})
        return await this.personRepo.save(newPerson)
    }
}