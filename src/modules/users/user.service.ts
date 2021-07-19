import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    index(): Promise<User[]>{
        return this.userRepository.find()
    }
    
    async get(id: number): Promise<User>{
        try{
            const user = await this.userRepository.findOneOrFail(id)
            return user
        }catch(err){
            throw err
        }
    }
    
    async create(user: Object): Promise<User>{
        const newUser = this.userRepository.create(user)
        console.log(newUser)
        return this.userRepository.save(newUser)
    }
    
    async update(id:number, data: Object): Promise<User>{
        const user = await this.get(id)
        Object.assign(user, data)
        return this.userRepository.save(user)
    }
    
    async delete(id: number): Promise<User>{
        const user = await this.get(id)

        return this.userRepository.remove(user)
    }
}