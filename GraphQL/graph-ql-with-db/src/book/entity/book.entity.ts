import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'book' })
export class Book{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  title: string;

  @Column()
  price: number;
}
