import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Gender } from '../constants/gender.enum';
import { Service } from 'src/service_module/entities/service.entity';
import { User } from 'src/user/entities/user.entity';

@Entity('provider')
export class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @ManyToMany(() => Service)
  @JoinTable({ name: 'provider_services' })
  services: Service[];

  @Column({ default: true })
  isActive: boolean;

  @Column()
  createdBy: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'createdBy' })
  createdByUser: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
