import { Controller, Get, Post, Param, Body, Put, Delete, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Get()
    index(){
        return this.userService.index()
    }
    
    @Get(':id')
    get(@Param() params){
        return this.userService.get(params.id)
    }
    
    @Post()
    create(
        @Body(new ValidationPipe({errorHttpStatusCode: 422})) CreateUserDto: CreateUserDto
    ){
        return this.userService.create(CreateUserDto)
    }
    
    @Put(':id')
    update(
        @Param() params, 
        @Body(new ValidationPipe({errorHttpStatusCode: 422})) UpdateUserDto: UpdateUserDto
    ){
        return this.userService.update(params.id, UpdateUserDto)
    }
    
    @Delete(':id')
    delete(@Param() params){
        return this.userService.delete(params.id)
    }
}