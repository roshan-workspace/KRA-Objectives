import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './users/role.guard';
import { CONSTANTS } from './constants';



@Controller("app")
export class AppController {
  constructor(private readonly authService: AuthService){}

  @Post("/login")
  @UseGuards(AuthGuard("local"))
  login(@Request() req):string{ 
    const token = this.authService.geterateToken(req.user);
    return token
  }


  @Get("/admin")
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLE.ADMIN))
  adminsData():string{
    return "This is private data for Admin only"
  }


  @Get("/manager")
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLE.MANAGER))
  managersData(){
    return "This is a private route for managers data only"
  }


  @Get("/user")
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLE.USER))
  usersData():string{
    return "This is used for getting user data"
  }


}


