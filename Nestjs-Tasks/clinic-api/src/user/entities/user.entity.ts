
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../constants/roles.enum";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string

    @Column({nullable:true})
    lastName?:string

    @Column({unique:true})
    userName:string

    @Column({ unique: true })
    email: string;

    @Column()
    password:string


    @Column({
        type:"enum",
        enum:UserRole,
        default:UserRole.USER
    })
    role:UserRole;

    
    @Column("int")
    age:number


    @CreateDateColumn({type:'timestamp'})
    createdAt:Date;


    @UpdateDateColumn({type:"timestamp"})
    updatedAt:Date;


}
