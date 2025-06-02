import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export class BookGuard implements CanActivate {
  public user_name: String = 'Roshan';
  public password: String = '321';

  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    if (
      request.header('user_name') == undefined ||
      request.header('password') == undefined
    )
      return false;

    return request.header('user_name') == this.user_name && request.header("password") == this.password;
  }
}
