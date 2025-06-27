import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { FindOneUserDto, UserServiceController, UserServiceControllerMethods , UpdateUserDto, CreateUserDto, Pagination, Users, User} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController{

  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  findAllUser() {
    return this.usersService.findAll();
  }

  findOne(findOneUserDto: FindOneUserDto):any {
    return this.usersService.findOne(findOneUserDto.id);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  removeUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.remove(findOneUserDto.id);
  }

  queryUsers(paginationDtoStream: Observable<Pagination>){
    return this.usersService.queryUsers(paginationDtoStream)
  }
}
