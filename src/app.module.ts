import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './modules/users/user.module'

import config from '../ormconfig'

@Module({
  imports: [
    //ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
