import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Person } from "src/entities/person.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DeletePersonCommand } from "../impl/delete-person.command";
import { NotFoundException } from "@nestjs/common";

@CommandHandler(DeletePersonCommand)
export class DeletePersonsHandler implements ICommandHandler<DeletePersonCommand>{

    constructor(@InjectRepository(Person) private personRepo: Repository<Person>){}

    async execute(command: DeletePersonCommand): Promise<Person | null> {
      const person = this.personRepo.findOneBy({id:command.id})

      if(!person) throw new NotFoundException(`Person with the id ${command.id} Not Found`)
       
      await this.personRepo.delete(command.id)  
      return person
    }
}