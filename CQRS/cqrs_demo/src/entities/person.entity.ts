import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"varchar", nullable:false})
    name:string

     @Column({type:"int", nullable:false})
    age:number
}