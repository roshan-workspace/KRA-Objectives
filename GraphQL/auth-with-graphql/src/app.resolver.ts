import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './auth/auth.guard';
import { AddUserArgs } from './user/args/addUser.args';
import { UserService } from './user/user.service';
import { User } from './user/entity/user.entity';

import * as jwt from 'jsonwebtoken';
import { JwtGuard } from './auth/jwt.guard';
import { RoleGuard, Roles } from './auth/role.guard';

@Resolver((of) => String)
export class AppResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => String)
  index(): string {
    return 'NestJs GraphQL Server';
  }

  @Query(() => String)
  @UseGuards(JwtGuard, new RoleGuard(Roles.ADMIN))
  securedResourceForAdmin(@Context('user') user: any,): string {
    return `Very secret info only for admin` + JSON.stringify(user);
  }

  @Query(() => String)
  @UseGuards(JwtGuard, new RoleGuard(Roles.USER))
  securedResourceForUsers(@Context('user') user: any,): string {
    return `Very secret info only for user` + JSON.stringify(user);
  }

  @Query((returns) => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: User,
  ): string {
    let payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
    return jwt.sign(payload, 'Secretkey', { expiresIn: '1d' });
  }

  @Mutation(() => User, { name: 'addUser' })
  registerUser(@Args('adduserArgs') addUserArgs: AddUserArgs) {
    return this.userService.registerUser(addUserArgs);
  }
}
