import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CustomUserRepository } from './Repo/user.repository';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    {
      provide: CustomUserRepository,
      useFactory: (dataSource: DataSource) =>
        new CustomUserRepository(dataSource),
      inject: [DataSource],
    },
    UserService,
  ],
  exports:[UserService]
})
export class UserModule {}


