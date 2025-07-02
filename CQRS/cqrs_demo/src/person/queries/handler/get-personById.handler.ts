import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Person } from "src/entities/person.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GetPersonByIdQuery } from "../impl/get-personById.query";
import { NotFoundException } from "@nestjs/common";

@QueryHandler(GetPersonByIdQuery)
export class GetPersonByIdHandler implements IQueryHandler<GetPersonByIdQuery>{

   constructor(@InjectRepository(Person) private personRepo: Repository<Person>){}

   async execute(query: GetPersonByIdQuery): Promise<Person | null> {
    const person =  await this.personRepo.findOneBy({id:query.id})
    if(!person) throw new NotFoundException(`Person with the Id ${query.id} not found`)
     return person   
    }

}