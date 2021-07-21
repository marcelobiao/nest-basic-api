import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Exclude } from 'class-transformer'

@Entity('users')
export class User extends BaseEntity  {

    @PrimaryGeneratedColumn()
    @Exclude({
        toPlainOnly: true
    })
    id: number

    @Column()
    email: string
    
    @Column()
    name: string
}