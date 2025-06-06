import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "../constants/gender.enum";
import { Service } from "src/service_module/entities/service.entity";

@Entity("provider")
export class Provider{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string

    @Column({nullable:true})
    lastName:string

    @Column({type:"enum", enum:Gender})
    gender:Gender

    // @Column()
    // @ManyToOne(()=>Provider,(provider)=>provider.services)
    // // services:Service[];


}
