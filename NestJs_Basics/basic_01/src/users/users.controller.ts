import { Body, Controller, Get, Param, Post, Patch, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

        @Get() // GET /users or /users?role=value
        findAll(@Query("role") role?:"intern" | "admin" | "engineer"){
            // return [role]
            return this.userService.findAll(role)
        }

        @Get(':id')  // GET users/:id
        findOne(@Param("id", ParseIntPipe) id: number){ 
            return this.userService.findOne(id)
        }

        @Post()  // POST Create a user
        create(@Body(ValidationPipe) user: CreateUserDto){
            return this.userService.create(user)
        }

        @Patch(':id')  // PATCH  Update a user
        findAndUpdate(@Param("id", ParseIntPipe) id: number,@Body(ValidationPipe) userUpdate:UpdateUserDto ){
            return this.userService.findAndUpdate(+id, userUpdate)
        }

        @Delete(':id')  //DELETE Delete a user
        deleteOne(@Param('id', ParseIntPipe) id: number){
            return this.userService.deleteOne(id)
        }

}
