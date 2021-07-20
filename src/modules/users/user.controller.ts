import { Controller, Get, Post, Param, Body, Put, Delete } from "@nestjs/common";
import { UserService } from "./user.service";

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
    create(@Body() user){
        return this.userService.create(user)
    }
    
    @Put(':id')
    update(@Param() params, @Body() user){
        return this.userService.update(params.id, user)
    }
    
    @Delete(':id')
    delete(@Param() params){
        return this.userService.delete(params.id)
    }
}